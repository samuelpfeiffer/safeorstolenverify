import { ReactNode } from 'react';
import { Logo } from '@/components/common/Logo';

interface AuthPageContainerProps {
  children: ReactNode;
}

export const AuthPageContainer = ({ children }: AuthPageContainerProps) => {
  return (
    <div className="bg-sos text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-8">
          <Logo size="xl" showText />
        </div>
        {children}
      </div>
    </div>
  );
};
