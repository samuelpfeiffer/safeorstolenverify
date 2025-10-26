import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileOnboarding } from '../components/MobileOnboarding';

const MobileOnboardingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const completed = localStorage.getItem('mobile-onboarding-completed');
    if (completed) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleComplete = () => {
    navigate('/', { replace: true });
  };

  return <MobileOnboarding onComplete={handleComplete} />;
};

export default MobileOnboardingPage;
