"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginPage = () => {
  const { push } = useRouter();

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      push("http://localhost:3000/library");
    }, 400);
  };
  return (
    <div className="my-14 flex flex-col mx-auto w-full h-full ">
      <div className="m-12 bg-article-purple rounded-lg p-3">
        <h1
          style={{ fontFamily: "serif" }}
          className="p-3 flex bg-article-yellow rounded-lg mb-3"
        >
          <img
            className="h-20 w-1/2  "
            src="/articleCard.svg"
            alt="article card"
          />
          <span className="text-3xl	mt-8">Login</span>
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <label className="flex flex-col">
                  <Field
                    render={({ field, form: { isSubmitting } }: any) => (
                      <input
                        className="rounded-lg mb-3 p-1"
                        {...field}
                        type="email"
                        placeholder="Email"
                      />
                    )}
                    type="email"
                    name="email"
                  />
                  <ErrorMessage
                    className="mb-3 text-red-600"
                    name="email"
                    component="div"
                  />
                </label>
                <label className="flex flex-col">
                  <Field
                    render={({ field, form: { isSubmitting } }: any) => (
                      <input
                        className="rounded-lg mb-3 p-1"
                        {...field}
                        type="password"
                        placeholder="Password"
                      />
                    )}
                    type="password"
                    name="password"
                  />
                  <ErrorMessage
                    className="mb-3 text-red-600"
                    name="password"
                    component="div"
                  />
                </label>
                <button
                  style={{ fontFamily: "serif" }}
                  className="rounded-lg p-3 bg-article-green text-black"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
