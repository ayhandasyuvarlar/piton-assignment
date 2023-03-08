"use client";
import { fetchProductsDetails } from "@/reducer/productDetailSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLeft, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { fetchImageSlice } from "@/reducer/productCoverImageSlice";
const productDetail = ({ params, searchParams }) => {
  const { productDetail } = useSelector((state) => state.productDetail);
  const { loading } = useSelector((state) => state.productDetail);
  const { error } = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const categoryIdx = parseInt(searchParams.categoryId);
  const productIdx = parseInt(params.id);
  const data = {
    categoryIdx,
    productIdx,
  };

  useEffect(() => {
    dispatch(fetchProductsDetails(data));
    dispatch(fetchImageSlice(productDetail?.cover));
  }, [dispatch]);

  return (
    <>
      {error && <>{error}</>}
      {loading && "...loading"}
      {!loading && !error && (
        <section className="flex flex-col w-11/12 h-auto gap-10 m-auto mt-12 mb-16">
          <div className="flex items-center gap-2">
            <Link
              href={{
                pathname: `/category/${searchParams.categoryName}`,
                query: {
                  category: categoryIdx,
                },
              }}
              className={"flex items-center gap-2"}
            >
              <AiOutlineLeft />{" "}
              <h1 className="text-2xl font-bold text-colorOne">Book Details</h1>
            </Link>
          </div>
          <div className="flex flex-row gap-10 w-full">
            <div
              style={{ width: "420px", height: "570px" }}
              className=" bg-primaryOne h-80 flex items-center justify-center"
            >
              <img
                src={url}
                alt=""
                style={{ width: "320px", height: "450px" }}
              />
            </div>
            <div className="flex flex-col w-7/12 border justify-start items-start gap-2.5">
              <div className="flex w-full justify-between items-center">
                <h1 className="font-semibold text-3xl">
                  {productDetail?.name}
                </h1>
                <div className="w-11 h-11  rounded-full bg-primaryOne flex items-center justify-center">
                  <AiOutlineHeart className="w-6 h-6 text-checkBox" />
                </div>
              </div>
              <h1 className="text-3xl text-inputColor font-semibold">
                {productDetail?.author}
              </h1>
              <div className="mt-16">
                <h2 className="text-2xl text-colorOne font-semibold">
                  Summary
                </h2>
                <p className="text-inputColor text-xl w-full mt-3">
                  {productDetail?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            {!loading && !error && (
              <button
                type="button"
                className=" flex justify-around gap-2 w-80 h-16 rounded items-center bg-primaryTwo focus:outline-none text-white text-xl"
              >
                <p>{productDetail?.price} $</p>
                <p>Buy Now</p>
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default productDetail;
