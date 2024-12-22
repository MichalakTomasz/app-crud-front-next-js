"use client";

import { AuthContext } from "@components/AuthProvider";
import { useContext, useState, useCallback, useEffect } from "react";
import { Form, Field } from "react-final-form";

const Page = () => {
  const authContext = useContext(AuthContext);
  const [isAuthorized, setIsAuthorized] = useState(authContext?.isAuthorized);
  const [userId, setUserId] = useState(authContext?.userId);
  const [roles, setRoles] = useState(authContext?.roles);
  const [token, setToken] = useState(authContext?.token);
  const [expiration, setExpiration] = useState(authContext?.expiration);

  const auth =  async (values) => {
    await authContext.logIn(values.email, values.password, "LogIn");
  }

  const onSubmit = (values) => {
    var userData = auth(values);
    setIsAuthorized(userData?.isAuthorized)
    setUserId(userData?.userId);
    setRoles(userData?.roles);
    setToken(userData?.token);
    setExpiration(userData?.expiration);
  }
    return (
      <>
        <h1>LogIn</h1>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label name="email">Email</label>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div>
                <label name="password">Password</label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit">LogIn</button>
            </form>
          )}
        />
      </>
    );
};

export default Page;
