import { useContext } from "react";
import { AuthContext } from "../contexts/authContex";

export const useAuth = () => {
  return useContext(AuthContext);
};
