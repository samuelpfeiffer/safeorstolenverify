
interface AuthFormToggleProps {
  mode: 'signin' | 'signup';
  onToggleMode: () => void;
  disabled?: boolean;
}

export const AuthFormToggle = ({ mode, onToggleMode, disabled }: AuthFormToggleProps) => {
  return (
    <div className="text-center">
      <span className="text-gray-400">
        {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
      </span>
      <button
        onClick={onToggleMode}
        disabled={disabled}
        className="text-sos-orange hover:underline disabled:opacity-50"
      >
        {mode === 'signin' ? 'Sign up' : 'Sign in'}
      </button>
    </div>
  );
};
