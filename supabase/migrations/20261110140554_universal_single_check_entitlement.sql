-- Preserve every older two-check pack. A versioned Stripe price identifies new one-check purchases.
CREATE OR REPLACE FUNCTION public.guard_single_check_entitlement() RETURNS trigger
LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.plan IN ('single', 'complete') THEN
    IF NEW.stripe_price_id = 'price_1UaFfUGxnZLw8J7OhpJBpwCB' THEN
      NEW.checks_limit := 1;
    ELSIF NEW.plan = 'single' THEN
      NEW.checks_limit := 2;
    END IF;
    IF TG_OP = 'UPDATE' THEN
      NEW.checks_used_this_month := greatest(coalesce(OLD.checks_used_this_month,0),coalesce(NEW.checks_used_this_month,0));
      NEW.phone_lookups_used := greatest(coalesce(OLD.phone_lookups_used,0),coalesce(NEW.phone_lookups_used,0));
    END IF;
  END IF;
  RETURN NEW;
END $$;

-- A legacy certificate upgrade must match its own paid session, never another recent purchase.
CREATE OR REPLACE FUNCTION public.upgrade_complete_check() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.status IN ('completed','paid','succeeded') AND NEW.amount IN (299,499)
     AND (OLD.status IS DISTINCT FROM NEW.status OR OLD.amount IS DISTINCT FROM NEW.amount) THEN
    UPDATE public.subscriptions SET plan='complete', updated_at=now()
    WHERE stripe_subscription_id=NEW.stripe_session_id AND plan='single'
      AND stripe_price_id IS DISTINCT FROM 'price_1UaFfUGxnZLw8J7OhpJBpwCB';
  END IF;
  RETURN NEW;
END $$;

-- Transactional regression checks: temporary rows never enter the production entitlement table.
CREATE TEMP TABLE _pricing_entitlement_test (
 id int, plan text, stripe_price_id text, checks_limit int,
 checks_used_this_month int, phone_lookups_used int
) ON COMMIT DROP;
CREATE TRIGGER _pricing_entitlement_guard BEFORE INSERT OR UPDATE ON _pricing_entitlement_test
 FOR EACH ROW EXECUTE FUNCTION public.guard_single_check_entitlement();
INSERT INTO _pricing_entitlement_test VALUES
 (1,'single',NULL,1,0,0),
 (2,'complete','price_1UaFfUGxnZLw8J7OhpJBpwCB',50,0,0);
UPDATE _pricing_entitlement_test SET checks_used_this_month=1,phone_lookups_used=1 WHERE id=2;
UPDATE _pricing_entitlement_test SET checks_used_this_month=0,phone_lookups_used=0 WHERE id=2;
DO $$ BEGIN
 IF (SELECT checks_limit FROM _pricing_entitlement_test WHERE id=1) <> 2 THEN
  RAISE EXCEPTION 'Legacy two-check allowance changed';
 END IF;
 IF (SELECT checks_limit FROM _pricing_entitlement_test WHERE id=2) <> 1 OR
    (SELECT checks_used_this_month FROM _pricing_entitlement_test WHERE id=2) <> 1 OR
    (SELECT phone_lookups_used FROM _pricing_entitlement_test WHERE id=2) <> 1 THEN
  RAISE EXCEPTION 'New one-check allowance or replay guard failed';
 END IF;
END $$;
