"use client";

import "@styles/globals.css";
import AuthProvider from "../components/AuthProvider";
import UserData from "../components/UserData";
import Nav from "../components/nav";

import { styled } from "@mui/material/styles";
import { Grid2, Box } from "@mui/material";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <Item>
                <h1>Cloud academy Crud App</h1>
              </Item>
            </Grid2>
            <Grid2 size={12}>
              <Nav />
              </Grid2>
              <Grid2 size={2}></Grid2>
              <Grid2 size={8}>{children}</Grid2>
              <Grid2 size={2}></Grid2>
              <Grid2 size={1}></Grid2>
              <Grid2 size={10}>
                <UserData />
              </Grid2>
              <Grid2 size={1}></Grid2>
          </Grid2>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
