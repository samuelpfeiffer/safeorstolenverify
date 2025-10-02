import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp: string;
  userAgent: string;
  url: string;
}

export const useAIErrorHandler = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const { toast } = useToast();

  const analyzeError = async (error: Error, context?: Partial<ErrorContext>) => {
    setIsAnalyzing(true);
    
    try {
      const errorContext: ErrorContext = {
        ...context,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      const { data, error: functionError } = await supabase.functions.invoke('ai-error-handler', {
        body: {
          error: {
            message: error.message,
            stack: error.stack,
            name: error.name,
          },
          context: errorContext,
        },
      });

      if (functionError) {
        throw functionError;
      }

      if (data?.analysis) {
        setAnalysis(data.analysis);
        toast({
          title: "AI Analysis Complete",
          description: "Check the console or error panel for detailed analysis",
        });
        console.log("🤖 AI Error Analysis:", data.analysis);
        return data.analysis;
      }
    } catch (err) {
      console.error("Failed to analyze error:", err);
      toast({
        title: "Analysis Failed",
        description: "Could not get AI analysis for this error",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    analyzeError,
    isAnalyzing,
    analysis,
  };
};
