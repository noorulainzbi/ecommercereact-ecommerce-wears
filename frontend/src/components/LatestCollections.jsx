import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const LatestCollections = () => {
  const { products } = useShopContext();
  const [latestCollections, setLatestCollections] = useState([]);

  useEffect(() => {
    if (products?.length) {
      setLatestCollections(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="text-gray-600 text-xs sm:text-sm md:text-base w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
          corrupti hic.
        </p>
      </div>
      {/* Rendering Latest Collections */}
      <div className="grid grid-rows-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestCollections.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
