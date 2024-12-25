"use client";

import { AuthContext } from "@components/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";

const Page = () => {
  const authContext = useContext(AuthContext);
  const [isAuthorized, setIsAuthorized] = useState(authContext?.isAuthorized);
  const [userId, setUserId] = useState(authContext?.userId);
  const [roles, setRoles] = useState(authContext?.roles);
  const [token, setToken] = useState(authContext?.token);
  const [expiration, setExpiration] = useState(authContext?.expiration);
  const [message, setMessage] = useState();
  const [submited, setSubmited] = useState(undefined);

  const auth = async (values) => {
    const userData = await authContext.logIn(
      values.email ?? null,
      values.password ?? null,
      "LogIn"
    );
    setIsAuthorized(userData?.isAuthorized);
    setUserId(userData?.userId);
    setRoles(userData?.roles);
    setToken(userData?.token);
    setExpiration(userData?.expiration);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      auth(values);
      setSubmited(true);
    }
  });

  useEffect(() => {
    setMessage(roles?.includes("Admin") ? "logged" : "Wrong credentials");
  }, [token]);

  const messageElem = <div>{message}</div>;
  const loginElem = (
    <>
      <h1>LogIn</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="text"
          onChange={formik.handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          onChange={formik.handleChange}
        />
        <Button variant="contained" type="submit">
          LogIn
        </Button>
      </form>
    </>
  );

  return <>{!submited ? loginElem : messageElem}</>;
};

export default Page;
