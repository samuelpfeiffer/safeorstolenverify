-- Fix security issues with AI tables - require authentication instead of allowing anonymous access

-- Update AI Analysis Sessions policies
DROP POLICY IF EXISTS "Users can view their own AI analysis sessions" ON public.ai_analysis_sessions;
DROP POLICY IF EXISTS "Users can create AI analysis sessions" ON public.ai_analysis_sessions;
DROP POLICY IF EXISTS "Users can update their own AI analysis sessions" ON public.ai_analysis_sessions;

CREATE POLICY "Authenticated users can view their own AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR SELECT 
USING (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

CREATE POLICY "Authenticated users can create AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

CREATE POLICY "Authenticated users can update their own AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR UPDATE 
USING (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL))
WITH CHECK (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

CREATE POLICY "Service role can manage all AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Update Deep Thinking Processes policies
DROP POLICY IF EXISTS "Users can access deep thinking processes for their sessions" ON public.deep_thinking_processes;

CREATE POLICY "Authenticated users can access deep thinking processes for their sessions" 
ON public.deep_thinking_processes 
FOR ALL
USING (
  auth.uid() IS NOT NULL AND
  session_id IN (
    SELECT id FROM public.ai_analysis_sessions 
    WHERE user_id = auth.uid() OR (user_id IS NULL AND auth.uid() IS NOT NULL)
  )
);

CREATE POLICY "Service role can manage all deep thinking processes" 
ON public.deep_thinking_processes 
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Update Internet Search Results policies
DROP POLICY IF EXISTS "Users can access search results for their sessions" ON public.internet_search_results;

CREATE POLICY "Authenticated users can access search results for their sessions" 
ON public.internet_search_results 
FOR ALL
USING (
  auth.uid() IS NOT NULL AND
  session_id IN (
    SELECT id FROM public.ai_analysis_sessions 
    WHERE user_id = auth.uid() OR (user_id IS NULL AND auth.uid() IS NOT NULL)
  )
);

CREATE POLICY "Service role can manage all internet search results" 
ON public.internet_search_results 
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Update AI Model Performance policies
DROP POLICY IF EXISTS "Users can view AI model performance" ON public.ai_model_performance;

CREATE POLICY "Authenticated users can view AI model performance" 
ON public.ai_model_performance 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Service role can manage AI model performance" 
ON public.ai_model_performance 
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Update AI Feedback policies
DROP POLICY IF EXISTS "Users can manage their own feedback" ON public.ai_feedback;

CREATE POLICY "Authenticated users can manage their own feedback" 
ON public.ai_feedback 
FOR ALL
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "Service role can manage all AI feedback" 
ON public.ai_feedback 
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Update AI System Config policies
DROP POLICY IF EXISTS "Users can view active AI system config" ON public.ai_system_config;

CREATE POLICY "Authenticated users can view active AI system config" 
ON public.ai_system_config 
FOR SELECT 
USING (auth.uid() IS NOT NULL AND is_active = true);

CREATE POLICY "Service role can manage AI system config" 
ON public.ai_system_config 
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Admin users can manage AI system config" 
ON public.ai_system_config 
FOR ALL
USING (is_admin_user())
WITH CHECK (is_admin_user());