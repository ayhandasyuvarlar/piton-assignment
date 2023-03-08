"use client";
import ProductCard from "@/components/productcard/productCard";
import { fetchProducts, selectProducts } from "@/reducer/productsSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductList = ({ id, categoryName }) => {
  const { products } = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(id));

  }, [dispatch]);
  // burada gelen ürünleri  kategorisine ayırıyorum
  const categoryProducts = products.filter((item) => item.categoryId === id);

  let uniqueIds = {};
  // burada aynı idlere sahip itemleri silme işlemi yapıyoruz
  let uniqueData = categoryProducts.filter(function (item) {
    return uniqueIds.hasOwnProperty(item.id)
      ? false
      : (uniqueIds[item.id] = true);
  });

  return (
    <div className="flex justify-start gap-5 w-full border mt-3">
      {uniqueData.slice(0, 4).map((item) => (
       <ProductCard key={item.id} {...item} categoryName={categoryName}/>
      ))}
    </div>
  );
};

export default ProductList;
