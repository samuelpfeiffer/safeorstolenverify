import React, { useState, useEffect } from 'react';
import { aiService, type AIVerificationAnalysis, type AIContentGeneration } from '@/services/aiService';

export interface AIIntegrationState {
  isEnabled: boolean;
  isLoading: boolean;
  currentAnalysis: AIVerificationAnalysis | null;
  contentGeneration: AIContentGeneration | null;
  chatHistory: any[];
  recommendations: any[];
}

export const useAIIntegration = (itemData?: any) => {
  const [state, setState] = useState<AIIntegrationState>({
    isEnabled: true,
    isLoading: false,
    currentAnalysis: null,
    contentGeneration: null,
    chatHistory: [],
    recommendations: []
  });

  // Auto-analyze when item data changes
  useEffect(() => {
    if (itemData && state.isEnabled) {
      performAIAnalysis(itemData);
    }
  }, [itemData, state.isEnabled]);

  const performAIAnalysis = async (data: any) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const analysis = await aiService.analyzeVerification({
        serialNumber: data.serialNumber || '',
        itemType: data.name || data.type || 'Unknown',
        category: data.category || 'General',
        dbResults: data.dbResults || [],
        metadata: {
          color: data.color,
          price: data.price,
          location: data.location
        }
      });

      setState(prev => ({
        ...prev,
        currentAnalysis: analysis,
        isLoading: false
      }));

      return analysis;
    } catch (error) {
      console.error('AI analysis failed:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return null;
    }
  };

  const generateAIContent = async (itemData: any, verificationResult: any) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const content = await aiService.generateContent({
        product: itemData, // Note: External API field name (their terminology, not ours)
        verificationResult,
        userContext: {}
      });

      setState(prev => ({
        ...prev,
        contentGeneration: content,
        isLoading: false
      }));

      return content;
    } catch (error) {
      console.error('AI content generation failed:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return null;
    }
  };

  const sendChatMessage = async (message: string, context?: any) => {
    setState(prev => ({ 
      ...prev, 
      chatHistory: [...prev.chatHistory, { type: 'user', content: message, timestamp: new Date() }]
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
      console.error('AI chat failed:', error);
      return null;
    }
  };

  const detectFraudPatterns = async (fraudData: any) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const fraudAnalysis = await aiService.detectFraudPatterns(fraudData);
      setState(prev => ({ ...prev, isLoading: false }));
      return fraudAnalysis;
    } catch (error) {
      console.error('Fraud detection failed:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return null;
    }
  };

  const getPersonalizedRecommendations = async (userProfile: any, history: any[]) => {
    try {
      const recommendations = await aiService.generateRecommendations(userProfile, history);
      
      setState(prev => ({
        ...prev,
        recommendations: [
          ...recommendations.safetyTips.map(tip => ({ type: 'safety', content: tip })),
          ...recommendations.itemSuggestions.map(suggestion => ({ type: 'item', content: suggestion })),
          ...recommendations.riskAlerts.map(alert => ({ type: 'risk', content: alert }))
        ]
      }));

      return recommendations;
    } catch (error) {
      console.error('Recommendations failed:', error);
      return null;
    }
  };

  const toggleAI = (enabled: boolean) => {
    setState(prev => ({ ...prev, isEnabled: enabled }));
  };

  const clearChatHistory = () => {
    setState(prev => ({ ...prev, chatHistory: [] }));
  };

  const resetAnalysis = () => {
    setState(prev => ({
      ...prev,
      currentAnalysis: null,
      contentGeneration: null,
      recommendations: []
    }));
  };

  return {
    ...state,
    performAIAnalysis,
    generateAIContent,
    sendChatMessage,
    detectFraudPatterns,
    getPersonalizedRecommendations,
    toggleAI,
    clearChatHistory,
    resetAnalysis
  };
};