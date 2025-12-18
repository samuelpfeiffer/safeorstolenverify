import { useState, useEffect, useCallback } from 'react';
import { aiService, type AIVerificationAnalysis, type AIContentGeneration } from '@/services/aiService';
import { toast } from '@/hooks/use-toast';

export interface AIIntegrationState {
  isEnabled: boolean;
  isLoading: boolean;
  currentAnalysis: AIVerificationAnalysis | null;
  contentGeneration: AIContentGeneration | null;
  chatHistory: Array<{
    type: 'user' | 'ai';
    content: string;
    suggestedActions?: string[];
    confidence?: number;
    timestamp: Date;
  }>;
  recommendations: Array<{
    type: 'safety' | 'item' | 'risk';
    content: string;
  }>;
  error: string | null;
}

export const useAIIntegration = (itemData?: any) => {
  const [state, setState] = useState<AIIntegrationState>({
    isEnabled: true,
    isLoading: false,
    currentAnalysis: null,
    contentGeneration: null,
    chatHistory: [],
    recommendations: [],
    error: null
  });

  // Auto-analyze when item data changes
  useEffect(() => {
    if (itemData && state.isEnabled && itemData.serialNumber) {
      performAIAnalysis(itemData);
    }
  }, [itemData?.serialNumber, state.isEnabled]);

  const handleError = useCallback((error: any, context: string) => {
    console.error(`AI ${context} failed:`, error);
    
    // Check for specific error types
    const errorMessage = error?.message || String(error);
    
    if (errorMessage.includes('429') || errorMessage.includes('rate limit')) {
      toast({
        title: "Rate Limit Reached",
        description: "Too many requests. Please wait a moment and try again.",
        variant: "destructive"
      });
      setState(prev => ({ ...prev, error: 'Rate limit exceeded' }));
    } else if (errorMessage.includes('402') || errorMessage.includes('quota')) {
      toast({
        title: "AI Service Quota Exceeded",
        description: "AI analysis quota reached. Basic verification still available.",
        variant: "destructive"
      });
      setState(prev => ({ ...prev, error: 'Quota exceeded' }));
    } else {
      setState(prev => ({ ...prev, error: errorMessage }));
    }
  }, []);

  const performAIAnalysis = useCallback(async (data: any) => {
    if (!data?.serialNumber) return null;
    
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const analysis = await aiService.analyzeVerification({
        serialNumber: data.serialNumber || '',
        itemType: data.name || data.type || 'Unknown',
        category: data.category || 'General',
        dbResults: data.dbResults || [],
        metadata: {
          color: data.color,
          price: data.price,
          location: data.location,
          brand: data.brand,
          model: data.model
        }
      });

      setState(prev => ({
        ...prev,
        currentAnalysis: analysis,
        isLoading: false,
        error: null
      }));

      return analysis;
    } catch (error) {
      handleError(error, 'analysis');
      setState(prev => ({ ...prev, isLoading: false }));
      return null;
    }
  }, [handleError]);

  const generateAIContent = useCallback(async (itemData: any, verificationResult: any) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const content = await aiService.generateContent({
        product: itemData,
        verificationResult,
        userContext: {}
      });

      setState(prev => ({
        ...prev,
        contentGeneration: content,
        isLoading: false,
        error: null
      }));

      return content;
    } catch (error) {
      handleError(error, 'content generation');
      setState(prev => ({ ...prev, isLoading: false }));
      return null;
    }
  }, [handleError]);

  const sendChatMessage = useCallback(async (message: string, context?: any) => {
    setState(prev => ({ 
      ...prev, 
      chatHistory: [...prev.chatHistory, { 
        type: 'user', 
        content: message, 
        timestamp: new Date() 
      }],
      error: null
    }));

    try {
      const response = await aiService.chatAssistant(message, context);
      
      setState(prev => ({
        ...prev,
        chatHistory: [...prev.chatHistory, { 
          type: 'ai', 
          content: response.message, 
          suggestedActions: response.suggestedActions,
          confidence: response.confidence,
          timestamp: new Date() 
        }]
      }));

      return response;
    } catch (error) {
      handleError(error, 'chat');
      return null;
    }
  }, [handleError]);

  const streamChatMessage = useCallback(async (
    message: string, 
    context?: any,
    onDelta?: (text: string) => void
  ) => {
    const messages = [
      ...state.chatHistory.map(msg => ({
        role: msg.type === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })),
      { role: 'user' as const, content: message }
    ];

    setState(prev => ({ 
      ...prev, 
      chatHistory: [...prev.chatHistory, { 
        type: 'user', 
        content: message, 
        timestamp: new Date() 
      }],
      error: null
    }));

    let fullResponse = '';

    await aiService.streamChat(
      messages,
      context,
      (delta) => {
        fullResponse += delta;
        onDelta?.(delta);
      },
      () => {
        setState(prev => ({
          ...prev,
          chatHistory: [...prev.chatHistory, { 
            type: 'ai', 
            content: fullResponse, 
            timestamp: new Date() 
          }]
        }));
      }
    );

    return fullResponse;
  }, [state.chatHistory]);

  const detectFraudPatterns = useCallback(async (fraudData: any) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const fraudAnalysis = await aiService.detectFraudPatterns(fraudData);
      setState(prev => ({ ...prev, isLoading: false }));
      return fraudAnalysis;
    } catch (error) {
      handleError(error, 'fraud detection');
      setState(prev => ({ ...prev, isLoading: false }));
      return null;
    }
  }, [handleError]);

  const getPersonalizedRecommendations = useCallback(async (userProfile: any, history: any[]) => {
    try {
      const recommendations = await aiService.generateRecommendations(userProfile, history);
      
      setState(prev => ({
        ...prev,
        recommendations: [
          ...recommendations.safetyTips.map(tip => ({ type: 'safety' as const, content: tip })),
          ...recommendations.itemSuggestions.map(suggestion => ({ type: 'item' as const, content: suggestion })),
          ...recommendations.riskAlerts.map(alert => ({ type: 'risk' as const, content: alert }))
        ]
      }));

      return recommendations;
    } catch (error) {
      handleError(error, 'recommendations');
      return null;
    }
  }, [handleError]);

  const toggleAI = useCallback((enabled: boolean) => {
    setState(prev => ({ ...prev, isEnabled: enabled }));
  }, []);

  const clearChatHistory = useCallback(() => {
    setState(prev => ({ ...prev, chatHistory: [] }));
  }, []);

  const resetAnalysis = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentAnalysis: null,
      contentGeneration: null,
      recommendations: [],
      error: null
    }));
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    performAIAnalysis,
    generateAIContent,
    sendChatMessage,
    streamChatMessage,
    detectFraudPatterns,
    getPersonalizedRecommendations,
    toggleAI,
    clearChatHistory,
    resetAnalysis,
    clearError
  };
};
