"use client";
import { signUpUser } from "@/reducer/authSlice";
import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch()
  const { error, loading, msg } = useSelector(state => state.user)

  return (
    <div className="flex w-2/4">
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm({
            email: '',
            password: '',
            name: ''
          })
          dispatch(signUpUser(values))
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
                htmlFor="password"
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
            {!msg ? <button
              className="flex flex-row mt-5 rounded items-center justify-center w-96 h-16 bg-primaryTwo text-white text-2xl font-semibold"
              type="submit"
            >
              {loading === false ? 'Register' : 'Loading...'}
            </button> : <button
              className="flex flex-row mt-5 rounded items-center justify-center w-96 h-16 bg-primaryTwo text-white text-2xl font-semibold"
              type="button"
            >Enter login</button>}
            {error && 'Bu email zaten var'}

          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
