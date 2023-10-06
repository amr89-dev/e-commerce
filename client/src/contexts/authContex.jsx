import { createContext, useState } from "react";

export const AuthContext = createContext();
//eslint-disable-next-line
const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const data = { isAuthenticated };
  return <AuthContext.Provider value={data}></AuthContext.Provider>;
};

export default AuthContextProvider;
