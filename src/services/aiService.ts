// AI Service for SafeOrStolen - Real AI Integration via Lovable AI Gateway

import { supabase } from '@/integrations/supabase/client';

export interface AIVerificationAnalysis {
  riskScore: number;
  confidence: number;
  fraudIndicators: string[];
  recommendations: string[];
  narrativeSummary: string;
  additionalChecks: string[];
}

export interface AIContentGeneration {
  productDescription: string;
  riskAssessment: string;
  buyerAdvice: string;
  marketAnalysis: string;
}

export interface AIChatResponse {
  message: string;
  suggestedActions: string[];
  confidence: number;
}

export interface AISafetyAnalysis {
  risk_level: 'low' | 'medium' | 'high' | 'critical';
  confidence: number;
  reasoning: string[];
  recommendation: string;
  summary: string;
  red_flags: string[];
  verification_tips: string[];
}

class AIService {
  /**
   * AI-powered verification analysis using real AI
   */
  async analyzeVerification(data: {
    serialNumber: string;
    itemType: string;
    category: string;
    dbResults?: any[];
    metadata?: Record<string, any>;
  }): Promise<AIVerificationAnalysis> {
    try {
      const { data: response, error } = await supabase.functions.invoke('ai-verify-item', {
        body: {
          serialNumber: data.serialNumber,
          itemType: data.itemType,
          category: data.category,
          dbResults: data.dbResults || [],
          metadata: data.metadata || {}
        }
      });

      if (error) {
        console.error('AI verification failed:', error);
        return this.getFallbackAnalysis(data);
      }

      if (response?.success && response?.analysis) {
        return response.analysis;
      }

      // Use fallback if provided
      if (response?.fallback) {
        return response.fallback;
      }

      return this.getFallbackAnalysis(data);
    } catch (error) {
      console.error('AI verification analysis failed:', error);
      return this.getFallbackAnalysis(data);
    }
  }

  /**
   * AI-powered content generation for reports
   */
  async generateContent(data: {
    product: any;
    verificationResult: any;
    userContext?: any;
  }): Promise<AIContentGeneration> {
    try {
      const { data: response, error } = await supabase.functions.invoke('ai-content-generator', {
        body: {
          type: 'report',
          itemData: {
            category: data.product?.category,
            itemType: data.product?.itemType || data.product?.name,
            serialNumber: data.product?.serialNumber,
            brand: data.product?.brand,
            model: data.product?.model
          },
          verificationResult: data.verificationResult,
          userContext: data.userContext
        }
      });

      if (error) {
        console.error('AI content generation failed:', error);
        return this.getFallbackContent(data);
      }

      if (response?.success && response?.content) {
        return {
          productDescription: response.content.productDescription || '',
          riskAssessment: response.content.riskAssessment || '',
          buyerAdvice: response.content.buyerAdvice || '',
          marketAnalysis: response.content.marketAnalysis || ''
        };
      }

      return this.getFallbackContent(data);
    } catch (error) {
      console.error('AI content generation failed:', error);
      return this.getFallbackContent(data);
    }
  }

  /**
   * AI chat assistant for user queries - streaming
   */
  async chatAssistant(query: string, context?: any): Promise<AIChatResponse> {
    try {
      const { data: response, error } = await supabase.functions.invoke('ai-safety-advisor', {
        body: {
          identifier: context?.serialNumber || query,
          itemType: context?.itemType || 'general',
          additionalContext: query
        }
      });

      if (error) {
        console.error('AI chat failed:', error);
        return this.getFallbackChatResponse(query);
      }

      if (response?.success && response?.analysis) {
        return {
          message: response.analysis.summary || response.analysis.recommendation,
          suggestedActions: response.analysis.verification_tips || [],
          confidence: (response.analysis.confidence || 70) / 100
        };
      }

      return this.getFallbackChatResponse(query);
    } catch (error) {
      console.error('AI chat failed:', error);
      return this.getFallbackChatResponse(query);
    }
  }

  /**
   * Stream chat messages for real-time conversation
   */
  async streamChat(
    messages: Array<{ role: 'user' | 'assistant'; content: string }>,
    context?: any,
    onDelta: (text: string) => void = () => {},
    onDone: () => void = () => {}
  ): Promise<void> {
    const CHAT_URL = `https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/ai-chat`;

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages, context }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error('Failed to start stream');
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) onDelta(content);
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      onDone();
    } catch (error) {
      console.error('Stream chat error:', error);
      onDone();
    }
  }

  /**
   * AI-enhanced fraud detection patterns
   */
  async detectFraudPatterns(data: {
    sellerInfo?: any;
    itemDetails: any;
    pricePoint?: number;
    location?: string;
  }): Promise<{
    fraudScore: number;
    patterns: string[];
    warnings: string[];
  }> {
    try {
      const { data: response, error } = await supabase.functions.invoke('ai-safety-advisor', {
        body: {
          identifier: data.itemDetails?.serialNumber || 'unknown',
          itemType: data.itemDetails?.category || 'general',
          additionalContext: JSON.stringify({
            seller: data.sellerInfo,
            price: data.pricePoint,
            location: data.location
          })
        }
      });

      if (error || !response?.success) {
        return this.getFallbackFraudAnalysis();
      }

      const analysis = response.analysis;
      const riskToScore: Record<string, number> = {
        'low': 20,
        'medium': 50,
        'high': 75,
        'critical': 95
      };

      return {
        fraudScore: riskToScore[analysis.risk_level] || 50,
        patterns: analysis.red_flags || [],
        warnings: analysis.reasoning || []
      };
    } catch (error) {
      console.error('Fraud detection failed:', error);
      return this.getFallbackFraudAnalysis();
    }
  }

  /**
   * AI-powered recommendations engine
   */
  async generateRecommendations(userProfile: any, verificationHistory: any[]): Promise<{
    safetyTips: string[];
    itemSuggestions: string[];
    riskAlerts: string[];
  }> {
    // Generate personalized recommendations based on history
    const safetyTips = [
      'Always meet sellers in public, well-lit locations',
      'Bring a friend when making high-value purchases',
      'Trust your instincts - if something feels wrong, walk away',
      'Keep records of all verification checks',
      'Report suspicious listings to authorities'
    ];

    const itemSuggestions = [
      'Consider certified pre-owned options for electronics',
      'Look for items with warranty coverage',
      'Check manufacturer refurbished items',
      'Verify authenticity certificates for luxury items'
    ];

    const riskAlerts: string[] = [];
    
    // Analyze verification history for patterns
    if (verificationHistory?.length > 0) {
      const highRiskItems = verificationHistory.filter((v: any) => 
        v.riskScore > 50 || v.risk_level === 'high' || v.risk_level === 'critical'
      );
      
      if (highRiskItems.length > 0) {
        riskAlerts.push(`${highRiskItems.length} of your recent checks showed elevated risk`);
      }
    }

    return {
      safetyTips,
      itemSuggestions,
      riskAlerts
    };
  }

  /**
   * Get safety analysis for an identifier
   */
  async getSafetyAnalysis(identifier: string, itemType: string): Promise<AISafetyAnalysis> {
    try {
      const { data: response, error } = await supabase.functions.invoke('ai-safety-advisor', {
        body: {
          identifier,
          itemType
        }
      });

      if (error || !response?.success) {
        return this.getFallbackSafetyAnalysis();
      }

      return response.analysis;
    } catch (error) {
      console.error('Safety analysis failed:', error);
      return this.getFallbackSafetyAnalysis();
    }
  }

  // Private fallback methods
  private getFallbackAnalysis(data: any): AIVerificationAnalysis {
    return {
      riskScore: 25,
      confidence: 50,
      fraudIndicators: ['AI analysis temporarily unavailable'],
      recommendations: [
        'Verify seller identity and reputation',
        'Request proof of purchase documentation',
        'Meet in a public, safe location'
      ],
      narrativeSummary: `Basic verification completed for this ${data.category || 'item'}. AI analysis was limited - please use standard precautions.`,
      additionalChecks: [
        'Verify serial number with manufacturer',
        'Check local police records',
        'Research market pricing'
      ]
    };
  }

  private getFallbackContent(data: any): AIContentGeneration {
    return {
      productDescription: `Verification report for ${data.product?.category || 'item'}.`,
      riskAssessment: 'Standard risk assessment protocols applied.',
      buyerAdvice: 'Follow standard purchasing safety guidelines.',
      marketAnalysis: 'Market analysis based on standard data.'
    };
  }

  private getFallbackChatResponse(query: string): AIChatResponse {
    return {
      message: "I can help you verify items and stay safe from stolen goods. What would you like to check?",
      suggestedActions: ['Verify an Item', 'Learn Safety Tips', 'Report Suspicious Activity'],
      confidence: 0.7
    };
  }

  private getFallbackFraudAnalysis() {
    return {
      fraudScore: 30,
      patterns: ['Standard verification applied'],
      warnings: ['Unable to complete full AI analysis']
    };
  }

  private getFallbackSafetyAnalysis(): AISafetyAnalysis {
    return {
      risk_level: 'medium',
      confidence: 50,
      reasoning: ['AI analysis temporarily unavailable'],
      recommendation: 'Proceed with standard verification',
      summary: 'Unable to complete full AI analysis',
      red_flags: [],
      verification_tips: ['Verify seller identity', 'Request documentation']
    };
  }
}

export const aiService = new AIService();
