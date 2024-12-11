"use client";

import "@styles/globals.css";
import Nav from "../components/nav";
import { useState, useEffect } from "react";
import { auth } from "@services/controllerService";

const RootLayout = ({ children }) => {
  const [authRes, setAuthRes] = useState(null);
  useEffect(() => {
    const doAuth = async () => {
      const authResult = await auth('https://localhost:7174/auth', {
        credentials: {
          email: null,
          password: null,
        },
        authType: "Guest"
      });
      setAuthRes(authResult);
      localStorage.setItem('userData', JSON.stringify(authResult));
    };
    doAuth();
  }, []);

  return (
    <html lang="en">
      <body>
        <h1>Welcome to React!</h1>
        <Nav />
        <br/>
        <div>{children}</div>
        <div>Is user registred: {authRes?.isAuthorized ? "Yes" : "No"}</div>
        <div>UserId: {authRes?.userId}</div>
        <div>Token: {authRes?.token}</div>
        <div>Roles: {authRes?.roles}</div>
      </body>
    </html>
  );
};

export default RootLayout;
