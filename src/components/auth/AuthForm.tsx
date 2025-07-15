
import { AuthFormHeader } from '@/components/auth/AuthFormHeader';
import { AuthFormToggle } from '@/components/auth/AuthFormToggle';
import { SignInFormSecure } from '@/components/auth/SignInFormSecure';
import { SignUpFormSecure } from '@/components/auth/SignUpFormSecure';
import { useAuth } from '@/lib/auth';

interface AuthFormProps {
  mode: 'signin' | 'signup';
  onToggleMode: () => void;
}

export const AuthForm = ({ mode, onToggleMode }: AuthFormProps) => {
  const { loading: authLoading } = useAuth();

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <AuthFormHeader mode={mode} />

      {mode === 'signin' ? <SignInFormSecure /> : <SignUpFormSecure />}

      <AuthFormToggle 
        mode={mode} 
        onToggleMode={onToggleMode} 
        disabled={authLoading}
      />
    </div>
  );
};
