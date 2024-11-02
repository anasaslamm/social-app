import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useAuthActionsContext } from "../providers/auth/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  const { setUser } = useAuthActionsContext();
  const navigate = useNavigate();

  const loginto = () => {
    navigate("/auth/login");
  };

  const passRules =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    firstName: yup
      .string("Enter First Name")
      .required("First Name is Required"),
    lastName: yup.string("Enter Last Name").required("Last Name is Required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required")
      .matches(passRules),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      fetch(
        "https://nestjs-boilerplate-test.herokuapp.com/api/v1/auth/email/register",
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
            const userData = {
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
              password: values.password,
              confirmPassword: values.confirmPassword,
            };
            setUser(userData); // This sets the user in the context
          }
        })
        .catch((e) => {
          console.log("API Error", e);
        });

      // setUser({
      //   email: values.email,
      //   password: values.password,
      // }); // This sets the user in the context

      navigate("/auth/login");
    },
  });

  return (
    <React.Fragment>
      <Container sx={{ padding: "30px" }}>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h3" sx={{ margin: 4 }}>
            Register
          </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            placeholder="Please enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="First Name"
            fullWidth
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            label="Last Name"
            fullWidth
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
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
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />

          <Button onClick={loginto}>Login Page</Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Register;
