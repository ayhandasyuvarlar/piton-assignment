"use client";
import React from "react";

const Error = ({error}) => {
  return (
    <section className="flex  w-12/12 gap-2.5 mt-12 mb-12 justify-center items-center">
      <h1 className="text-red-500 text-2xl">Error</h1>
      <p className="text-red-500 text-2xl">{error}</p>
    </section>
  );
};

export default Error;
