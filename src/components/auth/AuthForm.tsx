import { AuthFormHeader } from '@/components/auth/AuthFormHeader';
import { AuthFormToggle } from '@/components/auth/AuthFormToggle';
import { SignInFormSecure } from '@/components/auth/SignInFormSecure';
import { SignUpFormSecure } from '@/components/auth/SignUpFormSecure';
import { GoogleSignInButton } from '@/components/auth/GoogleSignInButton';
import { useAuth } from '@/lib/auth';

interface AuthFormProps {
  mode: 'signin' | 'signup';
  onToggleMode: () => void;
}

export const AuthForm = ({ mode, onToggleMode }: AuthFormProps) => {
  const { loading: authLoading } = useAuth();

  const handleAuthSuccess = () => {
    if (mode === 'signup') {
      setTimeout(() => {
        onToggleMode();
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <AuthFormHeader mode={mode} />

      <GoogleSignInButton />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
        </div>
      </div>

      {mode === 'signin' ? 
        <SignInFormSecure onSuccess={handleAuthSuccess} /> : 
        <SignUpFormSecure onSuccess={handleAuthSuccess} />
      }

      <AuthFormToggle 
        mode={mode} 
        onToggleMode={onToggleMode} 
        disabled={authLoading}
      />
    </div>
  );
};
