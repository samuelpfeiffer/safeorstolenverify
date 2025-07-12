
import { AuthForm } from '@/components/auth/AuthForm';
import { AuthPageLoading } from '@/components/auth/AuthPageLoading';
import { AuthPageContainer } from '@/components/auth/AuthPageContainer';
import { useAuthPageLogic } from '@/hooks/useAuthPageLogic';

const AuthPage = () => {
  const { mode, loading, toggleMode, isOAuthFlow } = useAuthPageLogic();

  // Show loading state while checking authentication or processing OAuth
  if (loading || isOAuthFlow) {
    return <AuthPageLoading />;
  }

  return (
    <AuthPageContainer>
      <AuthForm mode={mode} onToggleMode={toggleMode} />
    </AuthPageContainer>
  );
};

export default AuthPage;
