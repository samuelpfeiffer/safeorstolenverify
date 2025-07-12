import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sos text-white flex items-center justify-center px-6">
      <Card className="bg-sos-dark border-sos-orange/20 max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-sos-orange mb-4">404</div>
            <div className="w-32 h-1 bg-sos-orange mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Don't worry though - we'll help you get back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/')}
              className="bg-sos-orange hover:bg-sos-orange/80"
              size="lg"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Button>
            
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              size="lg"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-12 pt-8 border-t border-sos-orange/20">
            <p className="text-gray-400 mb-4">
              Need help finding what you're looking for?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button
                onClick={() => navigate('/')}
                className="text-sos-orange hover:text-sos-orange/80 underline"
              >
                Home Page
              </button>
              <button
                onClick={() => navigate('/verify')}
                className="text-sos-orange hover:text-sos-orange/80 underline"
              >
                Verify Items
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-sos-orange hover:text-sos-orange/80 underline"
              >
                About Us
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-sos-orange hover:text-sos-orange/80 underline"
              >
                Contact Support
              </button>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-4 bg-sos/30 rounded-lg">
            <div className="flex items-center justify-center gap-2 text-gray-300 mb-2">
              <Search className="h-4 w-4" />
              <span className="text-sm">Quick Tip</span>
            </div>
            <p className="text-sm text-gray-400">
              If you were trying to verify an item, head to our verification page and enter your serial number there.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;