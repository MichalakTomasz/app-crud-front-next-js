"use client";

import '@styles/globals.css';
import Nav from '../components/nav';
import UserData from '../components/UserData';
import { AuthProvider } from '@services/AuthContext';

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <h1>Welcome to React!</h1>
          <Nav />
          <br/>
          { children }
          <br/>
          <UserData />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
