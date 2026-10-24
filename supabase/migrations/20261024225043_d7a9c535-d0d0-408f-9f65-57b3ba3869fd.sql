CREATE OR REPLACE FUNCTION public.guard_single_check_entitlement() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$ BEGIN
IF NEW.plan = 'single' THEN
 NEW.checks_limit := 2;
 IF TG_OP = 'UPDATE' THEN NEW.checks_used_this_month := greatest(coalesce(OLD.checks_used_this_month,0),coalesce(NEW.checks_used_this_month,0)); NEW.phone_lookups_used := greatest(coalesce(OLD.phone_lookups_used,0),coalesce(NEW.phone_lookups_used,0)); END IF;
END IF;
RETURN NEW; END $$;
CREATE TRIGGER guard_single_check_entitlement BEFORE INSERT OR UPDATE ON public.subscriptions FOR EACH ROW EXECUTE FUNCTION public.guard_single_check_entitlement();