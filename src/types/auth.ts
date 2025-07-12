
import { User, Session } from '@supabase/supabase-js';

export interface AuthResponse {
  data: {
    user: User | null;
    session: Session | null;
    weakPassword?: boolean;
  };
  error?: {
    message: string;
    status?: number;
  };
}

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signUp: (email: string, password: string, fullName: string) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
}
