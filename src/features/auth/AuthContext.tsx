import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AuthService from "./AuthService";
import { TUser } from "@/features/user/user.types";
import UserService from "@/features/user/UserService";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ApiError } from "@/lib/api.types";

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  user: TUser | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<TUser | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const fetchUser = async () => {
    try {
      const userData = await UserService.getMe();
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("Failed to fetch user:", error);
      logout(); // Logout if fetching user fails (e.g., invalid token)
      const { status, message } = error as ApiError;
      toast({
        variant: "destructive",
        title: status.toString(),
        description: message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (username: string, password: string) => {
    const data = await AuthService.login({ username, password });
    localStorage.setItem("access_token", data.access_token);
    await fetchUser(); // Fetch and set user data after login
    router.push("/");
  };

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    setUser(null);
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
