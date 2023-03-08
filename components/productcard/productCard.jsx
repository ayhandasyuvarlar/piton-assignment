'use client'
import { fetchImageSlice } from "@/reducer/productCoverImageSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ name, id, author, price, categoryId, categoryName, cover }) => {
  const { url, loading, error } = useSelector(state => state.coverImage)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchImageSlice(cover))
  })
  return (
    <>
      <Link
        href={{
          pathname: `/productDetails/${id}`,
          query: {
            name: name,
            author: author,
            categoryId: categoryId,
            categoryName: categoryName
          },
        }}
      >
        <div className={"w-80  h-52 flex  bg-primaryOne"}>
          <div className="w-2/4 h-52 flex items-center justify-center">
            <img
              src={url}
              alt={name}
              className={"w-32 h-44 object-cover rounded"}
            />
          </div>
          <div className="w-2/4 h-52 flex flex-col items-start justify-center">
            <div className="w-34 h-40 flex flex-col items-start justify-between">
              <div>
                <p className="text-base text-colorOne font-semibold">
                  {name}
                </p>
                <p className="text-xs text-black font-semibold">
                  {author}
                </p>
              </div>
              <div>
                <p className="font-bold  text-xl text-checkBox">
                  {price} $
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
