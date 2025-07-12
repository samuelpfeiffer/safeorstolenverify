
import { ReactNode } from 'react';

interface AuthPageContainerProps {
  children: ReactNode;
}

export const AuthPageContainer = ({ children }: AuthPageContainerProps) => {
  return (
    <div className="bg-sos text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
};
