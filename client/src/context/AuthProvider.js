import { createContext, useContextHook, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  const isauthed = () => {
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isauthed }}>
      {children}
    </AuthContext.Provider>
  );
};

//export default AuthContext;
export const useAuth = () => {
  return useContext(AuthContext);
};
