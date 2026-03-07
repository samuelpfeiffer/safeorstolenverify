-- Fix security definer views - make them security invoker
ALTER VIEW public.community_stories_public SET (security_invoker = on);
ALTER VIEW public.stolen_items_public SET (security_invoker = on);