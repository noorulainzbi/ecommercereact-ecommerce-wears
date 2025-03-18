import React from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext.jsx";

const ProductItem = ({ id, name = "", price = "", image = [] }) => {
  const { currency } = useShopContext();
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-110 tensition-all"
        />
      </div>
      <p className="text-sm pt-3 pb-1">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
