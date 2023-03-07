"use client";
import Error from "@/app/error";
import {
  fetchCategories,
  selectCategories,
  selectError,
} from "@/reducer/categorySlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import ProductList from "./productList";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Products = () => {
  const { categories } = useSelector(selectCategories);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    delay(3000).then(() => dispatch(fetchCategories()));
  }, [dispatch]);
  return (
    <>
      {!error && (
        <section className="flex  w-12/12 gap-2.5 mt-12 mb-12 justify-center items-center">
          {categories?.length <= 0 && <Loading />}
          {categories?.length > 1 && (
            <main className="w-full  flex flex-col  gap-2.5 ">
              {categories.map((item) => (
                <aside className="flex flex-col gap-5" key={item.id}>
                  <div className="flex justify-between items-center">
                    <h1
                      className="text-colorOne font-bold text-3xl 
                    "
                      title={item.name}
                    >
                      {item.name}
                    </h1>
                    <Link
                      href={{
                        pathname: `/category/${item.name}`,
                        query: {
                          category: item.id,
                        },
                      }}
                    >
                      View All
                    </Link>
                  </div>
                  <ProductList
                    id={item.id}
                    categoryName={item.name}
                  ></ProductList>
                </aside>
              ))}
            </main>
          )}
        </section>
      )}
      {error && <Error error={error}></Error>}
    </>
  );
};

export default Products;
