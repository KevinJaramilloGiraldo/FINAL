export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';  // Definimos los posibles roles
  }
  
  export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (token: string) => void;
    logout: () => void;
    hasRole: (requiredRole: string) => boolean;
  }