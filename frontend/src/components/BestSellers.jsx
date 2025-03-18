import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const { products } = useShopContext();

  useEffect(() => {
    if (products) {
      const bestProducts = products.filter((item) => item.bestseller);
      setBestSellers(bestProducts.slice(0, 5));
    }
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="text-gray-600 text-xs sm:text-sm md:text-base w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
          corrupti hic.
        </p>
      </div>
      {/* Rendering Best Sellers */}
      <div className="grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {bestSellers.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
