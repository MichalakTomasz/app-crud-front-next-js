"use client";

import "@styles/globals.css";
import Nav from "../components/nav";
import { useState, useEffect } from "react";
import {auth} from '@services/controller-service'


const RootLayout = ({ children }) => {
  const [authRes, setAuthRes] = useState(null);
  
  useEffect(() => {
    const doAuth = async () =>{
      const authResult = await auth(
        "https://localhost:7174/auth",
        {
          credentials: {
            email: null,
            password: null,
          },
          contentType: 'GUEST'
        });
        setAuthRes(authResult);
    } 
    doAuth();
    localStorage.setItem('jwtToken', authRes?.token);
    console.log('SetToken: ' + authRes?.token);
  }, []);

  return (
    <html lang="en">
      <body>
        <h1>Welcome to React!</h1>
        <Nav />
        <div>Is user registred: {authRes?.isAuthorized ? "Yes" : "No"}</div>
        <div>UserId: {authRes?.userId}</div>
        <div>Token: {authRes?.token}</div>
        <div>Roles: {authRes?.roles}</div>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
