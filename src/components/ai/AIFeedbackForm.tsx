import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { aiDatabaseService } from '@/services/aiDatabaseService';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { Star, MessageSquare, Send, CheckCircle } from 'lucide-react';

interface AIFeedbackFormProps {
  sessionId: string;
  onFeedbackSubmitted?: () => void;
  className?: string;
}

export const AIFeedbackForm: React.FC<AIFeedbackFormProps> = ({
  sessionId,
  onFeedbackSubmitted,
  className
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [helpful, setHelpful] = useState(false);
  const [accurate, setAccurate] = useState(false);
  const [actionable, setActionable] = useState(false);
  const [outcomeUseful, setOutcomeUseful] = useState(false);
  const [outcomePreventedFraud, setOutcomePreventedFraud] = useState(false);
  const [outcomeSavedMoney, setOutcomeSavedMoney] = useState(false);
  const [outcomeImprovedSafety, setOutcomeImprovedSafety] = useState(false);
  const [comments, setComments] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please provide a rating before submitting feedback.",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);

    try {
      const success = await aiDatabaseService.submitFeedback({
        session_id: sessionId,
        user_id: user?.id,
        helpful,
        accurate,
        actionable,
        rating,
        comments: comments.trim() || undefined,
        outcome_useful: outcomeUseful,
        outcome_prevented_fraud: outcomePreventedFraud,
        outcome_saved_money: outcomeSavedMoney,
        outcome_improved_safety: outcomeImprovedSafety
      });

      if (success) {
        setSubmitted(true);
        toast({
          title: "Feedback Submitted",
          description: "Thank you for your feedback! It helps improve our AI system.",
        });
        
        if (onFeedbackSubmitted) {
          onFeedbackSubmitted();
        }
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Feedback submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Unable to submit feedback. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className={className}>
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
          <h3 className="font-semibold mb-2">Feedback Submitted!</h3>
          <p className="text-sm text-muted-foreground">
            Thank you for helping us improve our AI analysis system.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Analysis Feedback
        </CardTitle>
        <CardDescription>
          Help us improve by sharing your experience with this AI analysis
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div className="space-y-2">
            <Label>Overall Rating *</Label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1 hover:scale-110 transition-transform"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {rating > 0 && (
                  <>
                    {rating}/5 - {
                      rating === 5 ? 'Excellent' :
                      rating === 4 ? 'Good' :
                      rating === 3 ? 'Average' :
                      rating === 2 ? 'Poor' : 'Very Poor'
                    }
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Quality Assessment */}
          <div className="space-y-4">
            <Label>How would you rate this analysis?</Label>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="helpful">Was this analysis helpful?</Label>
                  <p className="text-xs text-muted-foreground">
                    Did it provide useful insights for your needs?
                  </p>
                </div>
                <Switch
                  id="helpful"
                  checked={helpful}
                  onCheckedChange={setHelpful}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="accurate">Was this analysis accurate?</Label>
                  <p className="text-xs text-muted-foreground">
                    Did the information seem correct and reliable?
                  </p>
                </div>
                <Switch
                  id="accurate"
                  checked={accurate}
                  onCheckedChange={setAccurate}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="actionable">Were the recommendations actionable?</Label>
                  <p className="text-xs text-muted-foreground">
                    Could you take specific steps based on the advice?
                  </p>
                </div>
                <Switch
                  id="actionable"
                  checked={actionable}
                  onCheckedChange={setActionable}
                />
              </div>
            </div>
          </div>

          {/* Outcome Tracking */}
          <div className="space-y-4">
            <Label>Did this analysis help you:</Label>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="outcome-useful">Make a better decision?</Label>
                <Switch
                  id="outcome-useful"
                  checked={outcomeUseful}
                  onCheckedChange={setOutcomeUseful}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="outcome-fraud">Avoid potential fraud?</Label>
                <Switch
                  id="outcome-fraud"
                  checked={outcomePreventedFraud}
                  onCheckedChange={setOutcomePreventedFraud}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="outcome-money">Save money?</Label>
                <Switch
                  id="outcome-money"
                  checked={outcomeSavedMoney}
                  onCheckedChange={setOutcomeSavedMoney}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="outcome-safety">Improve safety?</Label>
                <Switch
                  id="outcome-safety"
                  checked={outcomeImprovedSafety}
                  onCheckedChange={setOutcomeImprovedSafety}
                />
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-2">
            <Label htmlFor="comments">Additional Comments (Optional)</Label>
            <Textarea
              id="comments"
              placeholder="Share any specific feedback, suggestions, or issues you encountered..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={submitting || rating === 0}
            className="w-full"
          >
            {submitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Submitting...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Submit Feedback
              </div>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Your feedback helps us continuously improve our AI analysis capabilities
          </p>
        </form>
      </CardContent>
    </Card>
  );
};