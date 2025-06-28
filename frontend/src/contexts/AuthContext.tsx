import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (token: string, userData?: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    // Check if user is authenticated on app load
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      // You can also decode the token here to get user info
      // For now, we'll just set a basic user object
      setUser({ token });
    }
  }, []);

  const login = (token: string, userData?: any) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setUser(userData || { token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
