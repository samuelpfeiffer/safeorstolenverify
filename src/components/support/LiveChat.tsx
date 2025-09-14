import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone, 
  Mail, 
  Clock,
  User,
  Bot,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'support' | 'bot';
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

interface LiveChatProps {
  isBusinessHours?: boolean;
}

const LiveChat: React.FC<LiveChatProps> = ({ isBusinessHours = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [showUserForm, setShowUserForm] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !showUserForm) {
      // Initialize chat with welcome message
      const welcomeMessage: ChatMessage = {
        id: '1',
        text: isBusinessHours 
          ? "Hi! I'm here to help you with any questions about SafeOrStolen. How can I assist you today?"
          : "Thanks for reaching out! Our support team is currently offline, but I can help answer common questions or you can leave a message.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, showUserForm, isBusinessHours]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setCurrentMessage('');

    // Simulate typing indicator
    setIsTyping(true);
    
    // Simulate bot/support response
    setTimeout(() => {
      setIsTyping(false);
      const response = getAutomatedResponse(currentMessage);
      
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: isBusinessHours ? 'support' : 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, responseMessage]);
    }, 1000 + Math.random() * 2000);
  };

  const getAutomatedResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return "Our verification service offers both free and unlimited plans. Free users get 3 verifications per month, while our unlimited plan is $9.99/month. Would you like me to show you our pricing page?";
    }
    
    if (message.includes('api') || message.includes('integration') || message.includes('business')) {
      return "We offer enterprise API access for businesses. Our API allows batch processing of up to 100 items simultaneously with real-time verification. Would you like me to connect you with our enterprise sales team?";
    }
    
    if (message.includes('stolen') || message.includes('safe') || message.includes('check')) {
      return "To verify if an item is stolen or safe, simply enter the IMEI, VIN, or serial number in our verification tool. We check against 25+ databases including police reports and insurance claims. The process takes less than 30 seconds.";
    }
    
    if (message.includes('help') || message.includes('support') || message.includes('problem')) {
      return "I'm here to help! You can ask me about our verification process, pricing, API access, or any technical issues. If you need specialized support, I can connect you with a human agent.";
    }
    
    if (message.includes('refund') || message.includes('cancel') || message.includes('billing')) {
      return "For billing inquiries, refunds, or subscription changes, I'll connect you with our billing specialist. We offer a 30-day money-back guarantee on all paid plans.";
    }
    
    return "Thanks for your message! " + (isBusinessHours 
      ? "A support agent will respond shortly. Is there anything specific I can help you with while you wait?"
      : "I've logged your inquiry and our team will respond within 24 hours. For urgent issues, please call our emergency support line.");
  };

  const handleStartChat = () => {
    if (userInfo.name && userInfo.email) {
      setShowUserForm(false);
      setIsConnected(true);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  if (showUserForm) {
    return (
      <Card className="fixed bottom-6 right-6 z-50 w-80 shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Start Chat</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${isBusinessHours ? 'bg-green-500' : 'bg-yellow-500'}`} />
            {isBusinessHours ? 'Support team online' : 'Outside business hours'}
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <Input
                placeholder="Enter your name"
                value={userInfo.name}
                onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={userInfo.email}
                onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={() => setShowUserForm(false)} variant="outline" className="flex-1">
              Chat as Guest
            </Button>
            <Button 
              onClick={handleStartChat}
              disabled={!userInfo.name || !userInfo.email}
              className="flex-1"
            >
              Start Chat
            </Button>
          </div>

          {!isBusinessHours && (
            <div className="text-xs text-muted-foreground bg-yellow-50 p-3 rounded">
              <Clock className="h-3 w-3 inline mr-1" />
              Business hours: Mon-Fri 9AM-6PM EST
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-200 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isBusinessHours ? 'bg-green-500' : 'bg-yellow-500'}`} />
            <CardTitle className="text-sm">
              {isBusinessHours ? 'Live Support' : 'Support (Offline)'}
            </CardTitle>
          </div>
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6"
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-80">
          <div className="flex-1 overflow-y-auto space-y-3 mb-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}>
                  <div className="flex items-start gap-2">
                    {message.sender !== 'user' && (
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        {message.sender === 'bot' ? (
                          <Bot className="h-3 w-3" />
                        ) : (
                          <User className="h-3 w-3" />
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted p-2 rounded-lg">
                  <div className="flex items-center gap-1">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">typing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {!isBusinessHours && (
            <div className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
              <Phone className="h-3 w-3" />
              Emergency: +1-555-SAFE (7233)
              <Mail className="h-3 w-3" />
              support@safeorstolen.com
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default LiveChat;