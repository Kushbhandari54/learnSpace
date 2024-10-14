"use client";
import React, { useState } from "react";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
  CardMedia,
  Input,
  Grid2,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const theme = createTheme();

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    try {
      const response = await fetch(
        `http://16.171.250.28:8080/login?username=${email}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      // Optionally, handle login data (e.g., token storage)
      // localStorage.setItem("token", data?.jwt);
      router.push("/");
    } catch (error) {
      console.error("Error during login:", error);
      // Display an error message to the user if necessary
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CssBaseline />

        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h4" sx={{ mb: 5 }}>
                Sign in
              </Typography>
              <form
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Grid2 container>
                  <Grid2 size={12}>
                    <TextField
                      fullWidth
                      value={email}
                      variant="outlined"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="User Name"
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <TextField
                      fullWidth
                      sx={{ mt: 4 }}
                      type="password"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </Grid2>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 10, mb: 2, p: 1, backgroundColor: "red" }}
                    onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                </Grid2>
              </form>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={
                "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1719570495~exp=1719571095~hmac=4f2684c1da62ad2f35a052163dbaf8c1b31bab57535a6cf873b4203caf8692d9"
              }
              alt={"image"}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
