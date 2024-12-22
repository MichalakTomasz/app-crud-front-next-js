"use client";

import { useContext, useEffect, useState, useCallback } from "react";
import { AuthContext } from "./AuthProvider";

const UserData = () => {
  const authContext = useContext(AuthContext);
  const [isAuthorized, setIsAuthorized] = useState(authContext?.isAuthorized);
  const [userId, setUserId] = useState(authContext?.userId);
  const [roles, setRoles] = useState(authContext?.roles);
  const [token, setToken] = useState(authContext?.token);
  const [expiration, setExpiration] = useState(authContext?.expiration);

  useEffect(() => {
    setIsAuthorized(authContext?.isAuthorized);
    setUserId(authContext?.userId);
    setRoles(authContext?.roles);
    setToken(authContext?.token);
    setExpiration(authContext?.expiration);
  }, []);

  return (
    <>
      <div>Is User Authorized: {isAuthorized ? "yes" : "no"}</div>
      <div>UserId: {userId}</div>
      <div>Roles: {roles}</div>
      <div>Token: {token}</div>
      <div>Expiration: {expiration}</div>
    </>
  );
};

export default UserData;
