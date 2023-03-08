'use client'
import { fetchImageSlice } from "@/reducer/productCoverImageSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

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
            categoryName: categoryName,
          },
        }}
      >
        <div
          style={{ height: "433px" }}
          className={
            "w-80   gap-2.5 flex flex-col justify-center  bg-primaryOne"
          }
        >
          <div className="w-4/4 h-auto flex items-center justify-center">
            <img

              src={url}
              alt={name}
              className={"w-3/4 object-cover rounded"}
              style={{ height: "300px" }}
            />
          </div>
          <div className="w-4/4 h-auto flex flex-col items-start justify-center">
            <div className="w-full h-auto p-2 flex  items-center justify-between">
              <div>
                <p className="text-xl text-colorOne font-semibold">{name}</p>
                <p className="text-base text-black font-semibold">{author}</p>
              </div>
              <div>
                <p className="font-bold  text-2xl text-checkBox">{price} $</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
