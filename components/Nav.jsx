"use client";

import { Tabs, Tab } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "./AuthProvider";

const Nav = () => {
  const authContext = useContext(AuthContext);
  const [roles, setRoles] = useState(authContext?.roles);

  useEffect(() => {
    setRoles(authContext?.roles);
  }, [authContext?.token]);

  const routes = [
    {
      name: "Home",
      path: "",
      index: 0
    },
    {
      name: "LogIn",
      path: "login",
      index: 1
    },
    {
      name: "Products",
      path: "products",
      index: 2
    },
    {
      name: "Product",
      path: "product",
      index: 3
    },
    {
      name: "Add Product",
      path: "addproduct",
      index: 4
    },
    {
      name: "Delete Product",
      path: "deleteproduct",
      index: 5,
    },
    {
      name: "Register Account",
      path: "registeraccount",
      index: 6
    },
    {
      name: "Delete Account",
      path: "deleteaccount",
      index: 7
    }
  ];

  const hasPermission = roles?.includes("Admin");
  const currentPath = window.location.pathname ?? "/";
  const availableRoutes = hasPermission ? routes : routes?.slice(0, 4);
  const validCurrentPath = availableRoutes?.some(route => "/" + route.path == currentPath) ? currentPath : "/";

  const mappedRoutes = (
    <Tabs value={validCurrentPath} centered>
      {availableRoutes?.map(route => (
        <Tab
          label={route.name}
          href={"/" + route.path}
          value={"/" + route.path}
          key={route.index}
        />
      ))}
    </Tabs>
  );

  return mappedRoutes;
};

export default Nav;
