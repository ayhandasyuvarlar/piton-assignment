import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-wrap w-full h-screen justify-between overflow-hidden">
      <div className="w-6/12 h-screen">
        <img
          src={"/authImage.jpeg"}
          alt={"authImage"}
          className={"w-full h-screen object-fit"}
        />
      </div>
      <div className="w-6/12 h-screen">{children}</div>
    </section>
  );
};

export default Layout;
