import React from "react";
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "", // confirm pass
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username too short")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role")
      .required("Role is required"),
    password: Yup.string()
      .required("Password is required!")
      .min(8, "Password too short")
      .max(20, "Password too long"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords must match!"
        ),
      })
      .required("You must confirm the password!"),
  });

  const submit = (values) => {
    alert("register user");
  };
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        /** YUP VALIDATION SCHEMA** */
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          //Guardamos los datos de registro en el local storage
          localStorage.setItem("credentials", values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              name="username"
              placeholder="Your username"
              type="text"
            />
            {errors.username && touched.username && (
              <ErrorMessage component="div" name="username" />
            )}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
            />
            {errors.email && touched.email && (
              <ErrorMessage component="div" name="email" />
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {errors.password && touched.password && (
              <ErrorMessage component="div" name="password" />
            )}
            <label htmlFor="email">Confirm password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Confirm your password"
              type="password"
            />
            {errors.confirm && touched.confirm && (
              <ErrorMessage component="div" name="confirm" />
            )}
            <button type="submit">Submit</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
