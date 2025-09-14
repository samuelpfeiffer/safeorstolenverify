import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  MessageSquare, 
  X, 
  Star, 
  Send, 
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Bug,
  Heart,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FeedbackWidgetProps {
  context?: 'verification-result' | 'general' | 'onboarding' | 'pricing';
  verificationId?: string;
  onClose?: () => void;
}

interface FeedbackData {
  type: 'bug' | 'feature' | 'compliment' | 'complaint' | 'suggestion';
  rating: number;
  category: string;
  message: string;
  email?: string;
  context?: string;
  verificationId?: string;
}

const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ 
  context = 'general', 
  verificationId,
  onClose 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'type' | 'details' | 'submitted'>('type');
  const [feedback, setFeedback] = useState<Partial<FeedbackData>>({
    context,
    verificationId,
    rating: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const feedbackTypes = [
    {
      type: 'compliment' as const,
      title: 'Great Experience',
      description: 'Share what worked well',
      icon: Heart,
      color: 'text-green-600 bg-green-100'
    },
    {
      type: 'suggestion' as const,
      title: 'Improvement Idea',
      description: 'Help us make it better',
      icon: Lightbulb,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      type: 'bug' as const,
      title: 'Report Issue',
      description: 'Something not working?',
      icon: Bug,
      color: 'text-red-600 bg-red-100'
    },
    {
      type: 'feature' as const,
      title: 'Feature Request',
      description: 'What would you like to see?',
      icon: MessageSquare,
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  const categories = {
    'verification-result': ['Accuracy', 'Speed', 'Information Clarity', 'Database Coverage', 'Report Format'],
    'general': ['User Interface', 'Performance', 'Documentation', 'Customer Support', 'Pricing'],
    'onboarding': ['Clarity', 'Completeness', 'Navigation', 'Tutorial Quality', 'Setup Process'],
    'pricing': ['Value for Money', 'Plan Options', 'Billing Process', 'Feature Access', 'Transparency']
  };

  const handleTypeSelect = (type: FeedbackData['type']) => {
    setFeedback(prev => ({ ...prev, type }));
    setStep('details');
  };

  const handleSubmit = async () => {
    if (!feedback.type || !feedback.message?.trim()) {
      toast({
        title: "Please complete all fields",
        description: "We need your feedback type and message to help improve our service.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real implementation, send to backend
      const feedbackPayload = {
        ...feedback,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };
      
      console.log('Feedback submitted:', feedbackPayload);
      
      setStep('submitted');
      
      toast({
        title: "Feedback sent successfully!",
        description: "Thank you for helping us improve SafeOrStolen.",
      });
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        onClose?.();
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Failed to send feedback",
        description: "Please try again or contact support directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setStep('type');
    setFeedback({ context, verificationId, rating: 0 });
    onClose?.();
  };

  const getContextTitle = () => {
    switch (context) {
      case 'verification-result': return 'How was your verification experience?';
      case 'onboarding': return 'How was the onboarding process?';
      case 'pricing': return 'Feedback on our pricing?';
      default: return 'Share your feedback';
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="fixed bottom-6 left-6 z-40 shadow-lg"
      >
        <MessageSquare className="h-4 w-4 mr-2" />
        Feedback
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 left-6 z-50 w-96 shadow-2xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{getContextTitle()}</CardTitle>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex gap-1 mt-2">
          {['type', 'details', 'submitted'].map((s, index) => (
            <div 
              key={s}
              className={`h-1 flex-1 rounded ${
                s === step ? 'bg-primary' : 
                index < ['type', 'details', 'submitted'].indexOf(step) ? 'bg-primary/50' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </CardHeader>

      <CardContent>
        {step === 'type' && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground mb-4">
              What would you like to share with us?
            </p>
            
            {feedbackTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Button
                  key={type.type}
                  variant="outline"
                  className="w-full justify-start h-auto p-4"
                  onClick={() => handleTypeSelect(type.type)}
                >
                  <div className={`p-2 rounded-full mr-3 ${type.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{type.title}</div>
                    <div className="text-sm text-muted-foreground">{type.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        )}

        {step === 'details' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="flex items-center gap-1">
                {feedbackTypes.find(t => t.type === feedback.type)?.icon && (
                  React.createElement(feedbackTypes.find(t => t.type === feedback.type)!.icon, {
                    className: "h-3 w-3"
                  })
                )}
                {feedbackTypes.find(t => t.type === feedback.type)?.title}
              </Badge>
            </div>

            {/* Rating (for compliments/complaints) */}
            {(feedback.type === 'compliment' || feedback.type === 'complaint') && (
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Rate your experience
                </Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating}
                      variant="ghost"
                      size="sm"
                      onClick={() => setFeedback(prev => ({ ...prev, rating }))}
                      className="p-1"
                    >
                      <Star 
                        className={`h-5 w-5 ${
                          rating <= (feedback.rating || 0) 
                            ? 'text-yellow-500 fill-yellow-500' 
                            : 'text-gray-300'
                        }`}
                      />
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Category */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Category</Label>
              <select
                value={feedback.category || ''}
                onChange={(e) => setFeedback(prev => ({ ...prev, category: e.target.value }))}
                className="w-full p-2 border rounded-md text-sm"
              >
                <option value="">Select a category</option>
                {categories[context]?.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Your feedback
              </Label>
              <Textarea
                placeholder="Please share the details of your feedback..."
                value={feedback.message || ''}
                onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
              />
            </div>

            {/* Email (optional) */}
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Email (optional)
              </Label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={feedback.email || ''}
                onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
              />
              <p className="text-xs text-muted-foreground mt-1">
                We'll only use this to follow up on your feedback
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setStep('type')}
                className="flex-1"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || !feedback.message?.trim()}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Feedback
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {step === 'submitted' && (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Thank you!</h3>
              <p className="text-sm text-muted-foreground">
                Your feedback helps us improve SafeOrStolen for everyone.
              </p>
            </div>
            {feedback.email && (
              <p className="text-xs text-muted-foreground">
                We'll follow up at {feedback.email} if needed.
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeedbackWidget;