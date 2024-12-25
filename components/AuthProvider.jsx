"use client";

import { createContext, useEffect, useState } from "react";
import { auth } from "@services/controllerService";
import { userData as USERDATA, baseUrl } from "../services/commonConsts";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState();
  const [userId, setUserId] = useState();
  const [roles, setRoles] = useState();
  const [token, setToken] = useState();
  const [expiration, setExpiration] = useState();

  const setUserData = (userData) => {
    setIsAuthorized(userData?.isAuthorized);
    setUserId(userData?.userId);
    setRoles(userData?.roles);
    setToken(userData?.token);
    setExpiration(userData?.expiration);
    sessionStorage.setItem(USERDATA, JSON.stringify(userData));
  };

  const checkAuth = async () => {
    const session = sessionStorage.getItem(USERDATA);
    const userData = session && JSON.parse(session);
    setUserData(userData);
    if (!userData?.token || new Date(userData?.expiration) < new Date()) {
      await logIn(null, null, "Guest");
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
    con;
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
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        userId,
        roles,
        expiration,
        token,
        checkAuth,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
