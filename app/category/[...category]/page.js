"use client";
import ProductCard from "./productCard";
import { fetchCategoryProducts } from "@/reducer/categoryProductsSlice";
import { fetchCategoriesSearch } from "@/reducer/categorySearchSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Category = ({ searchParams }) => {
  const categoryId = searchParams.category;
  const dispatch = useDispatch();
  const categoryName = useSelector((state) => state.category.category);
  const { categoryProducts, loading, error } = useSelector(
    (state) => state.categoryProducts
  );
  useEffect(() => {
    dispatch(fetchCategoriesSearch(categoryId));
    dispatch(fetchCategoryProducts(categoryId));
  }, [dispatch, categoryId]);

  return (
    <>
      {error && error}
      {loading ? (
        "...loading"
      ) : !loading && categoryName.length > 0 && categoryProducts.length > 0 ? (
        <div className="w-11/12 m-auto mt-10 mb-10">
          {categoryName && categoryName.length > 0 && (
            <>
              {categoryName.map((item) => (
                <div className="flex items-center gap-2">
                  <Link
                    href={{
                      pathname: `/`,
                    }}
                    className={"flex items-center gap-2"}
                  >
                    <AiOutlineLeft />
                    <h1 className="text-2xl font-bold text-colorOne">
                      {item.name}
                    </h1>
                  </Link>
                </div>
              ))}
            </>
          )}
          <div className="flex justify-start gap-5 w-full flex-wrap border mt-3">
            {categoryProducts.length > 0 &&
              categoryProducts.map((item) => (
                <ProductCard key={item.id} {...item} categoryName={categoryName[0].name}/>
              ))}
          </div>
        </div>
      ) : (
        "Böyle bir sayfa yok"
      )}
    </>
  );
};

export default Category;
