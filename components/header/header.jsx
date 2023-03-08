'use client'
import React, { useEffect, useState } from "react";

import Link from "next/link";
const navigation = [
  {
    name: "user",
    href: "#",
    icon: "/person.svg",
  },

  {
    name: "likes",
    href: "#",
    icon: "/like.svg",
  },
  {
    name: "basket",
    href: "#",
    icon: "/basket.svg",
  },
];
const Header = () => {

  const [token, setToken] = useState(localStorage.getItem('token') || null)
  useEffect(() => {
    localStorage.setItem('token', token)
  })

  return (
    token ? <main className="flex justify-center items-center gap-32 w-screen   h-28  m-auto">
      <div className="w-auto border flex justify-center">
        <Link href={"/"}>
          <img src="/logo.svg" alt="" width={"45%"} />
        </Link>
      </div>
      <div className="w-6/12  border">
        <label
          htmlFor="search"
          className="relative text-gray-400 focus-within:text-gray-600 block"
        >
          <img
            src="/search.svg"
            alt=""
            className={
              "pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
            }
            width={"16px"}
          />
          <input
            type="text"
            className="border  w-full h-12 rounded border-none bg-primaryOne pl-16 text-inputColor outline-none"
            placeholder="Search"
          />
        </label>
      </div>
      <div className="flex gap-4">
        {navigation.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            title={item.name}
            className={
              "flex w-14 h-12 rounded items-center justify-center bg-primaryOne"
            }
          >
            <img src={item.icon} alt={item.name} width={"18px"} />
          </Link>
        ))}
      </div>
    </main> : ''
  );
};

export default Header;
