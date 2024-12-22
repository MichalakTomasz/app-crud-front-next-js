"use client";

import { createContext, useEffect, useState } from "react";
import { auth } from "@services/controllerService";
import { userData as USERDATA, baseUrl} from '../services/commonConsts'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const userData = JSON.parse(sessionStorage.getItem(USERDATA));
  const [isAuthorized, setIsAuthorized] = useState(userData?.isAuthorized);
  const [userId, setUserId] = useState(userData?.userId);
  const [roles, setRoles] = useState(userData?.roles);
  const [token, setToken] = useState(userData?.token);
  const [expiration, setExpiration] = useState(userData?.expiration);
  
  const setUserData = (userData) => {
    setIsAuthorized(userData?.isAuthorized);
    setUserId(userData?.userId);
    setRoles(userData?.roles);
    setToken(userData?.token)
    setExpiration(userData?.expiration);
    sessionStorage.setItem(USERDATA, JSON.stringify(userData));
  };

  const checkAuth = async () => {
    if (!token || Date(expiration) < Date()){
      const data = await logIn(null, null, "Guest");
      setUserData(data);
    }
  };

  const logIn = async (email, password, authType) => {
    const userData = await auth(baseUrl + "/auth", {
      credentials: {
        email: email,
        password: password,
      },
      authType: authType,
    });
    setUserData(userData);

    return userData;
  };

  const logOut = () => {
    con
    const userData = {
      isAuthorized: false,
      userId: undefined,
      token: undefined,
      roles: undefined,
      expiration: undefined,
    };
    setUserData(userData);
  };

  useEffect(() => {
    checkAuth();
  }, [])

  checkAuth();

  return (
    <AuthContext.Provider value={{isAuthorized, userId, roles, expiration, token, checkAuth, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
