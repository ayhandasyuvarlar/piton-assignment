"use client";
import { fetchProducts, selectProducts } from "@/reducer/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductList = ({ id }) => {
  const { products } = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(id));
  }, [dispatch]);

  const filter = products.filter((item) => item.categoryId === id);

  let uniqueIds = {};
  // burada aynı idlere sahip itemleri silme işlemi yapıyoruz
  let uniqueData = filter.filter(function (item) {
    return uniqueIds.hasOwnProperty(item.id)
      ? false
      : (uniqueIds[item.id] = true);
  });

  return (
    <div>
      {uniqueData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
