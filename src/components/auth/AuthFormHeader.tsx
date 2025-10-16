
interface AuthFormHeaderProps {
  mode: 'signin' | 'signup';
}

export const AuthFormHeader = ({ mode }: AuthFormHeaderProps) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-white mb-2">
        {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
      </h1>
      <p className="text-foreground/80">
        {mode === 'signin' 
          ? 'Sign in to your SafeOrStolen account' 
          : 'Join SafeOrStolen to start verifying products'
        }
      </p>
    </div>
  );
};
