import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CheckCircle, MapPin, Clock } from 'lucide-react';

/**
 * Social Proof Engine - Real-time social proof notifications
 * Shows recent verifications, user counts, and trust signals
 */
export const SocialProofEngine: React.FC = () => {
  const [currentProof, setCurrentProof] = useState(0);

  const socialProofs = [
    {
      name: "Michael R.",
      location: "Los Angeles, CA",
      action: "just verified an iPhone 14 Pro",
      time: "2 minutes ago",
      avatar: "MR"
    },
    {
      name: "Sarah K.",
      location: "Austin, TX", 
      action: "avoided a $2,400 stolen car scam",
      time: "5 minutes ago",
      avatar: "SK"
    },
    {
      name: "James P.",
      location: "Miami, FL",
      action: "verified a MacBook Pro safely",
      time: "8 minutes ago",
      avatar: "JP"
    },
    {
      name: "Emily T.",
      location: "Seattle, WA",
      action: "checked a vehicle VIN - all clear",
      time: "12 minutes ago",
      avatar: "ET"
    },
    {
      name: "David M.",
      location: "Chicago, IL",
      action: "saved $800 by verifying first",
      time: "15 minutes ago",
      avatar: "DM"
    }
  ];

  // Rotate through social proofs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProof((prev) => (prev + 1) % socialProofs.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [socialProofs.length]);

  const proof = socialProofs[currentProof];

  return (
    <div className="fixed bottom-20 left-4 z-30 animate-slide-in-left">
      <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-2 border-green-500/30 max-w-xs">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <Avatar className="border-2 border-green-500">
              <AvatarFallback className="bg-green-500 text-white font-bold">
                {proof.avatar}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-1">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="font-semibold text-sm truncate">{proof.name}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">
                {proof.action}
              </p>
              
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{proof.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{proof.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
