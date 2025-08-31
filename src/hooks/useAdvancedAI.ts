import { useState, useEffect, useCallback } from 'react';
import { advancedAIService, type AdvancedAnalysisRequest, type AdvancedAnalysisResult, type ContinuousLearningData } from '@/services/advancedAI/AdvancedAIService';
import { useToast } from '@/hooks/use-toast';

export interface AdvancedAIState {
  isEnabled: boolean;
  isProcessing: boolean;
  currentAnalysis: AdvancedAnalysisResult | null;
  systemStatus: any;
  error: string | null;
}

export const useAdvancedAI = () => {
  const { toast } = useToast();
  const [state, setState] = useState<AdvancedAIState>({
    isEnabled: true,
    isProcessing: false,
    currentAnalysis: null,
    systemStatus: null,
    error: null
  });

  useEffect(() => {
    // Load system status on mount
    loadSystemStatus();
  }, []);

  const loadSystemStatus = useCallback(async () => {
    try {
      const status = await advancedAIService.getSystemStatus();
      setState(prev => ({ ...prev, systemStatus: status }));
    } catch (error) {
      console.error('Failed to load system status:', error);
    }
  }, []);

  const performAdvancedAnalysis = useCallback(async (request: AdvancedAnalysisRequest): Promise<string | null> => {
    if (!state.isEnabled) {
      toast({
        title: "Advanced AI Disabled",
        description: "Advanced AI features are currently disabled.",
        variant: "destructive"
      });
      return null;
    }

    setState(prev => ({ ...prev, isProcessing: true, error: null }));

    try {
      const analysisId = await advancedAIService.performAdvancedAnalysis(request);
      
      toast({
        title: "Advanced Analysis Started",
        description: `Deep thinking and internet search analysis initiated. ID: ${analysisId.slice(-8)}`,
      });

      // Poll for results
      const pollForResults = async () => {
        for (let i = 0; i < 60; i++) { // Poll for up to 60 seconds
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const result = await advancedAIService.getAnalysisResult(analysisId);
          if (result && result.metadata.processingTime > 0) {
            setState(prev => ({
              ...prev,
              currentAnalysis: result,
              isProcessing: false
            }));

            toast({
              title: "Advanced Analysis Complete",
              description: `Analysis completed in ${result.metadata.processingTime}ms with ${Math.round(result.confidence * 100)}% confidence.`,
            });

            return;
          }
        }

        // Timeout - still show partial results
        const result = await advancedAIService.getAnalysisResult(analysisId);
        setState(prev => ({
          ...prev,
          currentAnalysis: result,
          isProcessing: false,
          error: 'Analysis timed out but partial results may be available'
        }));
      };

      pollForResults().catch(console.error);

      return analysisId;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Advanced analysis failed';
      
      setState(prev => ({
        ...prev,
        isProcessing: false,
        error: errorMessage
      }));

      toast({
        title: "Analysis Failed",
        description: errorMessage,
        variant: "destructive"
      });

      return null;
    }
  }, [state.isEnabled, toast]);

  const performQuickSecurityAnalysis = useCallback(async (query: string, context: any = {}): Promise<string | null> => {
    const request: AdvancedAnalysisRequest = {
      query,
      context,
      analysisType: 'security',
      priority: 'high',
      requirements: {
        useDeepThinking: true,
        useInternetSearch: true,
        useMultipleModels: false,
        maxLatency: 10000,
        accuracyThreshold: 0.8
      }
    };

    return performAdvancedAnalysis(request);
  }, [performAdvancedAnalysis]);

  const performComprehensiveAnalysis = useCallback(async (query: string, context: any = {}): Promise<string | null> => {
    const request: AdvancedAnalysisRequest = {
      query,
      context,
      analysisType: 'comprehensive',
      priority: 'critical',
      requirements: {
        useDeepThinking: true,
        useInternetSearch: true,
        useMultipleModels: true,
        maxLatency: 30000,
        accuracyThreshold: 0.9
      }
    };

    return performAdvancedAnalysis(request);
  }, [performAdvancedAnalysis]);

  const performMarketAnalysis = useCallback(async (query: string, context: any = {}): Promise<string | null> => {
    const request: AdvancedAnalysisRequest = {
      query,
      context,
      analysisType: 'market',
      priority: 'medium',
      requirements: {
        useDeepThinking: false,
        useInternetSearch: true,
        useMultipleModels: false,
        maxLatency: 5000,
        accuracyThreshold: 0.7
      }
    };

    return performAdvancedAnalysis(request);
  }, [performAdvancedAnalysis]);

  const performRiskAnalysis = useCallback(async (query: string, context: any = {}): Promise<string | null> => {
    const request: AdvancedAnalysisRequest = {
      query,
      context,
      analysisType: 'risk',
      priority: 'high',
      requirements: {
        useDeepThinking: true,
        useInternetSearch: false,
        useMultipleModels: true,
        maxLatency: 15000,
        accuracyThreshold: 0.85
      }
    };

    return performAdvancedAnalysis(request);
  }, [performAdvancedAnalysis]);

  const recordFeedback = useCallback(async (
    analysisId: string,
    feedback: {
      helpful: boolean;
      accurate: boolean;
      actionable: boolean;
      rating: number;
      comments?: string;
    }
  ): Promise<void> => {
    try {
      const learningData: ContinuousLearningData = {
        userFeedback: feedback,
        outcomeTracking: {
          wasUseful: feedback.helpful,
          preventedFraud: feedback.rating >= 4,
          savedMoney: feedback.actionable,
          improvedSafety: feedback.accurate
        },
        performanceMetrics: {
          responseTime: state.currentAnalysis?.metadata.processingTime || 0,
          accuracyScore: feedback.accurate ? 1 : 0,
          userSatisfaction: feedback.rating / 5
        }
      };

      await advancedAIService.recordLearningData(analysisId, learningData);

      toast({
        title: "Feedback Recorded",
        description: "Thank you for your feedback. It helps improve our AI system.",
      });

    } catch (error) {
      console.error('Failed to record feedback:', error);
      toast({
        title: "Feedback Failed",
        description: "Unable to record feedback. Please try again.",
        variant: "destructive"
      });
    }
  }, [state.currentAnalysis, toast]);

  const toggleAdvancedAI = useCallback((enabled: boolean) => {
    setState(prev => ({ ...prev, isEnabled: enabled }));
    
    toast({
      title: enabled ? "Advanced AI Enabled" : "Advanced AI Disabled",
      description: enabled ? 
        "Deep thinking and internet search capabilities are now active." :
        "Advanced AI features have been disabled.",
    });
  }, [toast]);

  const clearCurrentAnalysis = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentAnalysis: null,
      error: null
    }));
  }, []);

  const getAnalysisById = useCallback(async (analysisId: string): Promise<AdvancedAnalysisResult | null> => {
    try {
      return await advancedAIService.getAnalysisResult(analysisId);
    } catch (error) {
      console.error('Failed to get analysis:', error);
      return null;
    }
  }, []);

  const getAllActiveAnalyses = useCallback(async (): Promise<AdvancedAnalysisResult[]> => {
    try {
      return await advancedAIService.getAllActiveAnalyses();
    } catch (error) {
      console.error('Failed to get active analyses:', error);
      return [];
    }
  }, []);

  return {
    // State
    ...state,
    
    // Analysis functions
    performAdvancedAnalysis,
    performQuickSecurityAnalysis,
    performComprehensiveAnalysis,
    performMarketAnalysis,
    performRiskAnalysis,
    
    // Utility functions
    recordFeedback,
    toggleAdvancedAI,
    clearCurrentAnalysis,
    getAnalysisById,
    getAllActiveAnalyses,
    loadSystemStatus
  };
};