-- Force types regeneration by adding a comment to user_stats table
COMMENT ON TABLE public.user_stats IS 'Tracks user search statistics and subscription status';
COMMENT ON TABLE public.search_history IS 'Stores user search history and results';
COMMENT ON TABLE public.stolen_items IS 'Database of reported stolen items';
