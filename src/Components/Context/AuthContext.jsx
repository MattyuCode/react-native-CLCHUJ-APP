import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isToken, setIsToken] = useState(null);

  const login = () => {
    setIsLoading(false);
    setIsToken("Mattyu's");
  };

  const logout = () => {
    setIsLoading(false);
    setIsToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, isToken }}>
      {children}
    </AuthContext.Provider>
  );
};
