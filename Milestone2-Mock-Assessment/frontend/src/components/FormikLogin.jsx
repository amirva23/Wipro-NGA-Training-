import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikLogin() {
  const schema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        alert("Form Submitted Successfully!");
        console.log("Formik form data:", values);
      }}
    >
      {() => (
        <Form
          style={{
            background: "#e3f0ff",
            padding: "20px",
            borderRadius: "12px",
            maxWidth: "350px",
            border: "2px solid #97c6ff",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            margin: "auto",
          }}
        >
          <h3 style={{ textAlign: "center", margin: 0 }}>Formik Login</h3>

          <label>Email:</label>
          <Field name="email" type="email" placeholder="Enter Email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <label>Password:</label>
          <Field name="password" type="password" placeholder="Enter Password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#0077ff",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
