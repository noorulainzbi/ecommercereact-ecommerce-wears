import React from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const RelatedProducts = ({ category = "Men", subCategory = "Topwear" }) => {
  const { products } = useShopContext();
  const relatedProducts = products.filter(
    (item) => item.category === category && item.subCategory === subCategory
  );

  return (
    <div className="my-20">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      {relatedProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {relatedProducts.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No related products found.
        </p>
      )}
    </div>
  );
};

export default RelatedProducts;
