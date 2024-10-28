import React, { useState } from "react";
import { useAuthActionsContext } from "../providers/auth/useAuthContext";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const { setUser } = useAuthActionsContext();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "anas@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      fetch(
        "https://nestjs-boilerplate-test.herokuapp.com/api/v1/auth/email/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      )
        .then((response) => {
          console.log("API Response", response.body);
          if (response.ok) {
            // setUser(userData); // This sets the user in the context
          }
        })
        .catch((e) => {
          console.log("API Error", e);
        });

      // Optionally, you can redirect the user to the homepage after login
      // window.location.href = "/app/home";
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px 0", marginTop: 2 }}
        >
          Login
        </Button>
        <Button component={Link} to="/auth/register">
          Register
        </Button>
        <Button component={Link} to="/auth/forgetpassword">
          Forget Password
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
