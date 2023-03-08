"use client";
import { signInUser } from "@/reducer/authSlice";
import { Formik } from "formik";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch()
  const { error, msg, loading, homePage } = useSelector(state => state.user)

  return (
    <div className="flex w-2/4">
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        onSubmit={(values, action) => {
          dispatch(signInUser(values))
          action.resetForm({
            email: '',
            password: '',
            rememberMe: false
          })
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className={"flex flex-col w-full  justify-start mt-1"}
          >
            <div className="flex flex-col gap-2.5">
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
            <div className="flex flex-col gap-2.5 mt-5">
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
            <div className="flex gap-1 mt-2">
              <input
                className="w-5"
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                {...formik.getFieldProps("rememberMe")}
              />
              <p className="text-checkBox text-base">Remember Me</p>
            </div>
            {
              homePage ? <Link
                href={'/'}
                className="flex flex-row mt-24 rounded items-center justify-center w-96 h-16 bg-primaryTwo text-white text-2xl font-semibold"
                type="submit"
              >
                Home Page
              </Link> : <button

                className="flex flex-row mt-24 rounded items-center justify-center w-96 h-16 bg-primaryTwo text-white text-2xl font-semibold"
                type="submit"
              >
                {loading ? 'Loading...' : '  Login'}
              </button>
            }
            {error === null ? null : error}
            {msg === null ? null : msg}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
