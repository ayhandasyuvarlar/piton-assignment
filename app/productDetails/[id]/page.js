"use client";
import { fetchProductsDetails } from "@/reducer/productDetailSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = ({ searchParams }) => {
  const product = useSelector((state) => state.productDetail);
  const productId = searchParams.productId;
  const categoryId = parseInt(searchParams.categoryId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsDetails(categoryId, productId));
  }, [dispatch, searchParams]);
  return (
    <div>
      {JSON.stringify(product)} {productId}
    </div>
  );
};

export default ProductDetail;
