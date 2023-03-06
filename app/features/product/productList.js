"use client";
import { fetchProducts, selectProducts } from "@/reducer/productsSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductList = ({ id }) => {
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
        <Link
          href={{
            pathname: `/productDetails/${item.id}`,
            query: {
              name: item.name,
              author: item.author,
              categoryId: item.categoryId,
              productId : item.id
            },
          }}
        >
          <div key={item.id} className={"w-80 h-52 flex  bg-primaryOne"}>
            <div className="w-2/4 h-52 flex items-center justify-center">
              <img
                // src={`https://assign-api.piton.com.tr/api/rest/cover_image/${item.cover}`}
                src="/authImage.jpeg"
                alt={item.name}
                className={"w-32 h-44 object-cover rounded"}
              />
            </div>
            <div className="w-2/4 h-52 flex flex-col items-start justify-center">
              <div className="w-34 h-40 flex flex-col items-start justify-between">
                <div>
                  <p className="text-base text-colorOne font-semibold">
                    {item.name}
                  </p>
                  <p className="text-xs text-black font-semibold">
                    {item.author}
                  </p>
                </div>
                <div>
                  <p className="font-bold  text-xl text-checkBox">
                    {item.price} $
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
