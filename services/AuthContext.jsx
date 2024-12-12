import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "@services/controllerService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [roles, setRoles] = useState();

  const doAuth = async (email, password, authType) => {
    const authResult = await auth("https://localhost:7174/auth", {
      credentials: {
        email: email,
        password: password,
      },
      authType: authType,
    });

    setIsAuthorized(authResult.isAuthorized);
    setUserId(authResult.userId);
    setRoles(authResult.roles);
    setToken(authResult.token);

    return await authResult;
  };

  useEffect(() => {
    doAuth(null, null, "Guest");
  }, []);

  const setAuth = (email, password, authType) => {
    doAuth(email, password, authType);
  };

  const logOut = () => {
    setToken(undefined);
    setUserId(undefined);
    setIsAuthorized(false);
    setRoles(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthorized, userId, token, roles, setAuth, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthService = () => {
  return useContext(AuthContext);
};
