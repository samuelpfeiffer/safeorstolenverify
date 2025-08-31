/**
 * Advanced AI Service
 * Orchestrates deep thinking, internet search, and multi-model AI capabilities
 */

import { deepThinkingEngine, type DeepThoughtProcess } from './core/DeepThinkingEngine';
import { internetSearchEngine, type SearchQuery, type SearchResult } from './search/InternetSearchEngine';
import { aiModelManager, type TaskRequirements, type ModelResponse } from './models/AIModelManager';

export interface AdvancedAnalysisRequest {
  query: string;
  context: any;
  analysisType: 'comprehensive' | 'security' | 'market' | 'risk' | 'pattern';
  priority: 'low' | 'medium' | 'high' | 'critical';
  requirements: {
    useDeepThinking: boolean;
    useInternetSearch: boolean;
    useMultipleModels: boolean;
    maxLatency?: number;
    accuracyThreshold?: number;
  };
}

export interface AdvancedAnalysisResult {
  id: string;
  query: string;
  result: string;
  confidence: number;
  sources: string[];
  reasoning: string[];
  recommendations: string[];
  metadata: {
    modelsUsed: string[];
    searchResults?: SearchResult[];
    thinkingProcess?: DeepThoughtProcess;
    processingTime: number;
    costEstimate: number;
  };
  timestamp: Date;
}

export interface ContinuousLearningData {
  userFeedback: {
    helpful: boolean;
    accurate: boolean;
    actionable: boolean;
    rating: number; // 1-5
    comments?: string;
  };
  outcomeTracking: {
    wasUseful: boolean;
    preventedFraud: boolean;
    savedMoney: boolean;
    improvedSafety: boolean;
  };
  performanceMetrics: {
    responseTime: number;
    accuracyScore: number;
    userSatisfaction: number;
  };
}

export class AdvancedAIService {
  private activeAnalyses = new Map<string, AdvancedAnalysisResult>();
  private learningData: ContinuousLearningData[] = [];
  private adaptationSchedule: NodeJS.Timeout | null = null;

  constructor() {
    this.startContinuousImprovement();
  }

  async performAdvancedAnalysis(request: AdvancedAnalysisRequest): Promise<string> {
    const startTime = Date.now();
    const analysisId = `analysis-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    try {
      console.log(`Starting advanced analysis: ${analysisId}`);

      // Initialize analysis result
      const analysisResult: AdvancedAnalysisResult = {
        id: analysisId,
        query: request.query,
        result: '',
        confidence: 0,
        sources: [],
        reasoning: [],
        recommendations: [],
        metadata: {
          modelsUsed: [],
          processingTime: 0,
          costEstimate: 0
        },
        timestamp: new Date()
      };

      this.activeAnalyses.set(analysisId, analysisResult);

      // Phase 1: Deep Thinking (if requested)
      let thinkingProcessId: string | null = null;
      if (request.requirements.useDeepThinking) {
        console.log('Initiating deep thinking process...');
        thinkingProcessId = await deepThinkingEngine.startDeepThinking(request.query, request.context);
      }

      // Phase 2: Internet Search (if requested)
      let searchResults: SearchResult[] = [];
      if (request.requirements.useInternetSearch) {
        console.log('Performing internet search...');
        searchResults = await this.performEnhancedSearch(request);
        analysisResult.metadata.searchResults = searchResults;
        analysisResult.sources = searchResults.map(r => r.source);
      }

      // Phase 3: Multi-Model Analysis
      const modelResponses = await this.performMultiModelAnalysis(request, searchResults);
      analysisResult.metadata.modelsUsed = modelResponses.map(r => r.model);

      // Phase 4: Wait for Deep Thinking to Complete (if started)
      let thinkingResult: DeepThoughtProcess | null = null;
      if (thinkingProcessId) {
        console.log('Waiting for deep thinking to complete...');
        
        // Poll for completion (max 30 seconds)
        const maxWaitTime = 30000;
        const pollInterval = 1000;
        let waited = 0;
        
        while (waited < maxWaitTime) {
          thinkingResult = await deepThinkingEngine.getThinkingProgress(thinkingProcessId);
          if (thinkingResult?.endTime) break;
          
          await new Promise(resolve => setTimeout(resolve, pollInterval));
          waited += pollInterval;
        }
        
        if (thinkingResult) {
          analysisResult.metadata.thinkingProcess = thinkingResult;
          analysisResult.reasoning = thinkingResult.reasoning;
        }
      }

      // Phase 5: Synthesis and Final Analysis
      const finalResult = await this.synthesizeResults(
        request,
        modelResponses,
        searchResults,
        thinkingResult
      );

      // Update analysis result
      analysisResult.result = finalResult.analysis;
      analysisResult.confidence = finalResult.confidence;
      analysisResult.recommendations = finalResult.recommendations;
      analysisResult.metadata.processingTime = Date.now() - startTime;
      analysisResult.metadata.costEstimate = this.calculateCostEstimate(modelResponses, searchResults);

      console.log(`Advanced analysis complete: ${analysisId} (${analysisResult.metadata.processingTime}ms)`);
      
      return analysisId;

    } catch (error) {
      console.error('Advanced analysis failed:', error);
      
      // Fallback to basic analysis
      const fallbackResult = await this.performFallbackAnalysis(request);
      
      const analysisResult: AdvancedAnalysisResult = {
        id: analysisId,
        query: request.query,
        result: fallbackResult,
        confidence: 0.6,
        sources: ['fallback-analysis'],
        reasoning: ['Advanced analysis failed, using fallback methods'],
        recommendations: ['Consider retrying with different parameters'],
        metadata: {
          modelsUsed: ['fallback'],
          processingTime: Date.now() - startTime,
          costEstimate: 0
        },
        timestamp: new Date()
      };

      this.activeAnalyses.set(analysisId, analysisResult);
      return analysisId;
    }
  }

  private async performEnhancedSearch(request: AdvancedAnalysisRequest): Promise<SearchResult[]> {
    const searchQuery: SearchQuery = {
      query: request.query,
      context: request.context,
      searchType: this.mapAnalysisTypeToSearchType(request.analysisType),
      filters: {
        timeRange: 'month',
        saftyLevel: 'high'
      },
      maxResults: 10
    };

    return await internetSearchEngine.performSearch(searchQuery);
  }

  private mapAnalysisTypeToSearchType(analysisType: string): 'general' | 'news' | 'academic' | 'government' | 'legal' {
    switch (analysisType) {
      case 'security': return 'legal';
      case 'market': return 'news';
      case 'risk': return 'government';
      case 'pattern': return 'academic';
      default: return 'general';
    }
  }

  private async performMultiModelAnalysis(
    request: AdvancedAnalysisRequest,
    searchResults: SearchResult[]
  ): Promise<ModelResponse[]> {
    const taskRequirements: TaskRequirements = {
      type: this.mapAnalysisTypeToTaskType(request.analysisType),
      complexity: request.priority === 'critical' ? 'high' : request.priority === 'high' ? 'medium' : 'low',
      domain: 'security-verification',
      maxLatency: request.requirements.maxLatency,
      requiredCapabilities: ['reasoning', 'analysis']
    };

    const responses: ModelResponse[] = [];

    if (request.requirements.useMultipleModels) {
      // Use multiple models for cross-validation
      const models = ['o1-preview', 'gpt-4o', 'claude-3-opus'];
      
      for (const modelId of models) {
        try {
          const prompt = this.constructPrompt(request, searchResults);
          const response = await aiModelManager.queryModel(modelId, prompt, request.context);
          responses.push(response);
        } catch (error) {
          console.warn(`Model ${modelId} failed:`, error);
        }
      }
    } else {
      // Use single best model
      try {
        const prompt = this.constructPrompt(request, searchResults);
        const response = await aiModelManager.queryWithFallback(taskRequirements, prompt, request.context);
        responses.push(response);
      } catch (error) {
        console.error('All models failed:', error);
      }
    }

    return responses;
  }

  private mapAnalysisTypeToTaskType(analysisType: string): 'analysis' | 'reasoning' | 'search' | 'generation' | 'classification' {
    switch (analysisType) {
      case 'security':
      case 'risk':
        return 'analysis';
      case 'pattern':
        return 'classification';
      case 'comprehensive':
        return 'reasoning';
      default:
        return 'analysis';
    }
  }

  private constructPrompt(request: AdvancedAnalysisRequest, searchResults: SearchResult[]): string {
    let prompt = `Advanced ${request.analysisType} analysis required:\n\nQuery: ${request.query}\n\n`;
    
    if (request.context && Object.keys(request.context).length > 0) {
      prompt += `Context: ${JSON.stringify(request.context, null, 2)}\n\n`;
    }

    if (searchResults.length > 0) {
      prompt += `Relevant search results:\n`;
      searchResults.forEach((result, index) => {
        prompt += `${index + 1}. ${result.title} (${result.source})\n   ${result.snippet}\n\n`;
      });
    }

    prompt += `Please provide a comprehensive analysis that includes:\n1. Risk assessment and security implications\n2. Evidence-based conclusions\n3. Actionable recommendations\n4. Confidence levels for each finding\n5. Additional verification steps needed\n
Focus on accuracy, safety, and legal compliance in your analysis.`;

    return prompt;
  }

  private async synthesizeResults(
    request: AdvancedAnalysisRequest,
    modelResponses: ModelResponse[],
    searchResults: SearchResult[],
    thinkingResult: DeepThoughtProcess | null
  ): Promise<{
    analysis: string;
    confidence: number;
    recommendations: string[];
  }> {
    if (modelResponses.length === 0) {
      return {
        analysis: 'Analysis could not be completed due to system constraints.',
        confidence: 0.1,
        recommendations: ['Retry analysis with different parameters']
      };
    }

    // Combine insights from all sources
    let synthesis = `## Comprehensive Analysis Results\n\n`;
    
    // Add deep thinking insights
    if (thinkingResult) {
      synthesis += `### Deep Reasoning Analysis\n${thinkingResult.finalAnalysis}\n\n`;
      synthesis += `**Reasoning Chain:**\n${thinkingResult.reasoning.map(r => `• ${r}`).join('\n')}\n\n`;
    }

    // Add model responses
    synthesis += `### AI Model Analysis\n`;
    modelResponses.forEach((response, index) => {
      synthesis += `**${response.model} (Confidence: ${Math.round(response.confidence * 100)}%)**\n`;
      synthesis += `${response.response}\n\n`;
    });

    // Add search intelligence
    if (searchResults.length > 0) {
      synthesis += `### Internet Intelligence\n`;
      synthesis += `Found ${searchResults.length} relevant sources providing additional context:\n`;
      searchResults.slice(0, 3).forEach(result => {
        synthesis += `• ${result.title} - ${result.snippet}\n`;
      });
      synthesis += '\n';
    }

    // Calculate weighted confidence
    const totalConfidence = modelResponses.reduce((sum, response) => sum + response.confidence, 0);
    const averageConfidence = totalConfidence / modelResponses.length;
    
    // Boost confidence if multiple models agree
    let finalConfidence = averageConfidence;
    if (modelResponses.length > 1) {
      const responses = modelResponses.map(r => r.response.toLowerCase());
      const agreementScore = this.calculateAgreementScore(responses);
      finalConfidence = (averageConfidence * 0.7) + (agreementScore * 0.3);
    }

    // Generate comprehensive recommendations
    const recommendations = this.generateSynthesizedRecommendations(
      request,
      modelResponses,
      thinkingResult,
      finalConfidence
    );

    return {
      analysis: synthesis,
      confidence: finalConfidence,
      recommendations
    };
  }

  private calculateAgreementScore(responses: string[]): number {
    if (responses.length < 2) return 0.5;

    // Simple keyword-based agreement scoring
    const keywords = ['risk', 'safe', 'dangerous', 'recommend', 'avoid', 'proceed', 'caution'];
    let agreements = 0;
    let total = 0;

    for (const keyword of keywords) {
      const matches = responses.filter(response => response.includes(keyword)).length;
      if (matches > 1) {
        agreements += Math.min(matches, responses.length);
      }
      total += responses.length;
    }

    return total > 0 ? agreements / total : 0.5;
  }

  private generateSynthesizedRecommendations(
    request: AdvancedAnalysisRequest,
    modelResponses: ModelResponse[],
    thinkingResult: DeepThoughtProcess | null,
    confidence: number
  ): string[] {
    const recommendations: string[] = [];

    // Base recommendations on confidence level
    if (confidence > 0.8) {
      recommendations.push('High confidence analysis - recommendations can be followed with standard precautions');
    } else if (confidence > 0.6) {
      recommendations.push('Moderate confidence - consider additional verification before proceeding');
    } else {
      recommendations.push('Low confidence analysis - seek additional expert consultation');
    }

    // Add thinking-based recommendations
    if (thinkingResult?.recommendations) {
      recommendations.push(...thinkingResult.recommendations);
    }

    // Add model-specific insights
    modelResponses.forEach(response => {
      if (response.response.includes('recommend')) {
        const lines = response.response.split('\n');
        const recommendationLines = lines.filter(line => 
          line.toLowerCase().includes('recommend') || 
          line.includes('•') || 
          line.includes('-')
        );
        recommendations.push(...recommendationLines.slice(0, 2));
      }
    });

    // Add priority-based recommendations
    if (request.priority === 'critical') {
      recommendations.unshift('CRITICAL PRIORITY: Immediate attention and action required');
    }

    return [...new Set(recommendations)]; // Remove duplicates
  }

  private async performFallbackAnalysis(request: AdvancedAnalysisRequest): Promise<string> {
    return `Fallback Analysis for: \"${request.query}\"\n\nDue to system constraints, this analysis uses basic verification protocols. The query suggests need for careful evaluation and standard safety precautions.\n\nRecommendations:\n• Follow standard verification procedures\n• Apply appropriate caution measures\n• Consider professional consultation if high value involved\n• Document all verification steps taken\n\nNote: For more comprehensive analysis, please retry when system resources are available.`;
  }

  private calculateCostEstimate(modelResponses: ModelResponse[], searchResults: SearchResult[]): number {
    let cost = 0;
    
    modelResponses.forEach(response => {
      const model = aiModelManager.getAvailableModels().find(m => m.id === response.model);
      if (model) {
        cost += response.tokenUsage * model.costPerToken;
      }
    });

    // Add search costs (minimal)
    cost += searchResults.length * 0.001;

    return cost;
  }

  async getAnalysisResult(analysisId: string): Promise<AdvancedAnalysisResult | null> {
    return this.activeAnalyses.get(analysisId) || null;
  }

  async getAllActiveAnalyses(): Promise<AdvancedAnalysisResult[]> {
    return Array.from(this.activeAnalyses.values());
  }

  async recordLearningData(analysisId: string, learningData: ContinuousLearningData): Promise<void> {
    this.learningData.push({
      ...learningData,
      // Add metadata linking to analysis
      metadata: { analysisId, timestamp: new Date() }
    } as any);

    // Trigger immediate learning if negative feedback
    if (!learningData.userFeedback.helpful || learningData.userFeedback.rating < 3) {
      await this.performImmediateLearning(analysisId, learningData);
    }
  }

  private async performImmediateLearning(analysisId: string, feedback: ContinuousLearningData): Promise<void> {
    console.log(`Performing immediate learning from negative feedback on analysis: ${analysisId}`);
    
    const analysis = this.activeAnalyses.get(analysisId);
    if (!analysis) return;

    // Analyze what went wrong and adjust model weights
    if (feedback.userFeedback.rating < 3) {
      // Reduce confidence in models used for this analysis
      analysis.metadata.modelsUsed.forEach(modelId => {
        console.log(`Reducing confidence for model: ${modelId}`);
        // This would adjust model weights in production
      });
    }

    // Adapt search strategies if search results were unhelpful
    if (!feedback.userFeedback.accurate && analysis.metadata.searchResults) {
      console.log('Adapting search strategies based on feedback');
      // This would adjust search parameters in production
    }
  }

  private startContinuousImprovement(): void {
    // Run adaptation every hour
    this.adaptationSchedule = setInterval(async () => {
      await this.performContinuousLearning();
    }, 60 * 60 * 1000);
  }

  private async performContinuousLearning(): Promise<void> {
    console.log('Performing continuous learning and adaptation...');

    try {
      // Analyze recent feedback
      const recentFeedback = this.learningData.slice(-100); // Last 100 feedback items
      
      if (recentFeedback.length === 0) return;

      // Calculate performance metrics
      const avgRating = recentFeedback.reduce((sum, feedback) => sum + feedback.userFeedback.rating, 0) / recentFeedback.length;
      const helpfulPercent = recentFeedback.filter(feedback => feedback.userFeedback.helpful).length / recentFeedback.length;
      const accuratePercent = recentFeedback.filter(feedback => feedback.userFeedback.accurate).length / recentFeedback.length;

      console.log(`Learning metrics - Avg Rating: ${avgRating}, Helpful: ${helpfulPercent * 100}%, Accurate: ${accuratePercent * 100}%`);

      // Adapt AI model manager
      await aiModelManager.adaptAndImprove();

      // Clean up old data
      await this.cleanupOldData();

      console.log('Continuous learning completed');

    } catch (error) {
      console.error('Continuous learning failed:', error);
    }
  }

  private async cleanupOldData(): Promise<void> {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    
    // Clean up old analyses
    for (const [id, analysis] of this.activeAnalyses.entries()) {
      if (analysis.timestamp < oneWeekAgo) {
        this.activeAnalyses.delete(id);
      }
    }

    // Clean up old learning data (keep last 1000 entries)
    if (this.learningData.length > 1000) {
      this.learningData.splice(0, this.learningData.length - 1000);
    }

    // Clean up deep thinking processes
    await deepThinkingEngine.cleanupCompletedProcesses();

    // Clean up search cache
    await internetSearchEngine.clearCache();
  }

  async getSystemStatus(): Promise<{
    activeAnalyses: number;
    modelPerformance: Record<string, any>;
    searchCapabilities: string[];
    learningDataPoints: number;
    lastLearningCycle: Date;
  }> {
    return {
      activeAnalyses: this.activeAnalyses.size,
      modelPerformance: aiModelManager.getModelPerformance(),
      searchCapabilities: await internetSearchEngine.getSearchCapabilities(),
      learningDataPoints: this.learningData.length,
      lastLearningCycle: new Date() // This would track actual last learning cycle
    };
  }

  destroy(): void {
    if (this.adaptationSchedule) {
      clearInterval(this.adaptationSchedule);
      this.adaptationSchedule = null;
    }
  }
}

export const advancedAIService = new AdvancedAIService();
