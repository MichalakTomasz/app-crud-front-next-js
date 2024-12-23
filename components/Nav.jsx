"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Nav = () => {
  console.log('nav')
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
  }, [authContext?.token]);

  const hasPermission = roles?.includes("Admin");

  const routes = [
    {
      name: "Home",
      path: "",
      index: 0,
    },
    {
      name: "LogIn",
      path: "login",
      index: 1,
    },
    {
      name: "Products",
      path: "products",
      index: 2,
    },
    {
      name: "Product",
      path: "product",
      index: 3,
    },
    {
      name: "Add Product",
      path: "addproduct",
      index: 4,
    },
    {
      name: "Delete Product",
      path: "deleteProduct",
      index: 5,
    },
    {
      name: "Register Account",
      path: "registeraccount",
      index: 5,
    },
    {
      name: "Delete Account",
      path: "deleteaccount",
      index: 6,
    },
  ];

  const mappedRoutes = routes.map((route) => (
    <Tab
      label={route.name}
      href={"/" + route.path}
      value={"/" + route.path}
      key={route.index}
    />
  ));

  const currentPath = window.location.pathname ?? "/";
  return (
    <Tabs value={currentPath} centered>
      {mappedRoutes.slice(0, 4)}
      {hasPermission ? mappedRoutes.slice(4) : null}
    </Tabs>
  );
};

export default Nav;
