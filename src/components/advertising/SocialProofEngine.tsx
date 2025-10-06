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
  const socialProofs = [{
    name: "Michael R.",
    location: "Los Angeles, CA",
    action: "just verified an iPhone 14 Pro",
    time: "2 minutes ago",
    avatar: "MR"
  }, {
    name: "Sarah K.",
    location: "Austin, TX",
    action: "avoided a $2,400 stolen car scam",
    time: "5 minutes ago",
    avatar: "SK"
  }, {
    name: "James P.",
    location: "Miami, FL",
    action: "verified a MacBook Pro safely",
    time: "8 minutes ago",
    avatar: "JP"
  }, {
    name: "Emily T.",
    location: "Seattle, WA",
    action: "checked a vehicle VIN - all clear",
    time: "12 minutes ago",
    avatar: "ET"
  }, {
    name: "David M.",
    location: "Chicago, IL",
    action: "saved $800 by verifying first",
    time: "15 minutes ago",
    avatar: "DM"
  }];

  // Rotate through social proofs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProof(prev => (prev + 1) % socialProofs.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [socialProofs.length]);
  const proof = socialProofs[currentProof];
  return <div className="fixed bottom-20 left-4 z-30 animate-slide-in-left">
      
    </div>;
};