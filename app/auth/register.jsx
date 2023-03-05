"use client";
import { Formik } from "formik";
import React from "react";

const Register = () => {
  return (
    <div className="flex w-2/4">
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className={"flex flex-col w-full  justify-start mt-0"}
          >
            <div className="flex flex-col gap-2.5">
              <label
                className="text-xl font-semibold text-colorOne"
                htmlFor="firstName"
              >
                Name
              </label>
              <input
                className="w-96 h-16 bg-primaryOne rounded pl-2 focus:outline-none text-inputColor text-xl"
                id="name"
                type="text"
                placeholder="Jony"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="flex flex-col gap-2.5 mt-3">
              <label
                className="text-xl font-semibold text-colorOne "
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="w-96 h-16 bg-primaryOne rounded pl-2 focus:outline-none text-inputColor"
                id="email"
                type="email"
                placeholder="john@mail.com"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="flex flex-col gap-2.5 mt-3">
              <label
                className="text-xl font-semibold text-colorOne"
                htmlFor="firstName"
              >
                Password
              </label>
              <input
                className="w-96 h-16 bg-primaryOne rounded pl-2 focus:outline-none text-inputColor text-xl"
                id="password"
                type="password"
                placeholder=""
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              className="flex flex-row mt-5 rounded items-center justify-center w-96 h-16 bg-primaryTwo text-white text-2xl font-semibold"
              type="submit"
            >
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
