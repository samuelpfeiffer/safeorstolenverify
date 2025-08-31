import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Brain, Send, MessageCircle, Zap, Shield, Search, HelpCircle } from 'lucide-react';
import { aiService, type AIChatResponse } from '@/services/aiService';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestedActions?: string[];
  confidence?: number;
}

interface AIChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: any;
}

export const AIChatAssistant: React.FC<AIChatAssistantProps> = ({
  isOpen,
  onClose,
  initialContext
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      setMessages([{
        id: 'welcome',
        type: 'ai',
        content: "Hi! I'm your AI verification assistant. I can help you check if items are stolen, provide safety advice, analyze market patterns, and answer questions about fraud protection. What would you like to know?",
        timestamp: new Date(),
        suggestedActions: ['Verify an Item', 'Safety Tips', 'Fraud Detection', 'Subscription Plans'],
        confidence: 100
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await aiService.chatAssistant(userMessage.content, initialContext);
      
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        type: 'ai',
        content: response.message,
        timestamp: new Date(),
        suggestedActions: response.suggestedActions,
        confidence: Math.round(response.confidence * 100)
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        type: 'ai',
        content: "I apologize, but I'm having trouble processing your request right now. Please try again or contact our support team for assistance.",
        timestamp: new Date(),
        suggestedActions: ['Try Again', 'Contact Support'],
        confidence: 50
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedAction = (action: string) => {
    setInputValue(action);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    { icon: Search, text: "How do I verify a serial number?", query: "How do I verify a serial number?" },
    { icon: Shield, text: "Is this price too good to be true?", query: "How can I tell if a price is suspiciously low?" },
    { icon: HelpCircle, text: "What are common fraud indicators?", query: "What are the most common fraud indicators I should watch for?" },
  ];

  if (!isOpen) return null;

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[500px] shadow-2xl z-50 border-2 border-primary/20 bg-background/95 backdrop-blur-sm">
      <CardHeader className="pb-3 border-b">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            AI Assistant
            <Badge variant="secondary" className="text-xs">
              <Zap className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            ×
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col h-[420px] p-0">
        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">
                  Start a conversation with your AI assistant
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <div className="text-sm leading-relaxed">
                    {message.content}
                  </div>
                  
                  {message.type === 'ai' && message.confidence && (
                    <div className="text-xs opacity-70 mt-2">
                      Confidence: {message.confidence}%
                    </div>
                  )}

                  {message.suggestedActions && message.suggestedActions.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {message.suggestedActions.map((action, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSuggestedAction(action)}
                          className="text-xs h-7"
                        >
                          {action}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                    AI is thinking...
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2">
            <div className="text-xs text-muted-foreground mb-2">Quick questions:</div>
            <div className="space-y-1">
              {quickQuestions.map((q, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSuggestedAction(q.query)}
                  className="w-full justify-start text-xs h-8"
                >
                  <q.icon className="h-3 w-3 mr-2" />
                  {q.text}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about verification, safety, or fraud..."
              className="text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              disabled={!inputValue.trim() || isLoading}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};