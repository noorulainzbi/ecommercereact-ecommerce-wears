import React from "react";
import Title from "../components/Title.jsx";
import { useShopContext } from "../context/ShopContext.jsx";

const Orders = () => {
  const { currency, products } = useShopContext();
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div>
        {products.slice(4, 8).map((item, index) => (
          <div className="py-2 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image} alt={item.name} />
              <div>
                <p className="text-base font-medium">{item.name}</p>
                <div className="flex items-center mt-2 text-base gap-3 text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p>
                  Date: <span className="text-gray-400">14 March 2025</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="h-2 min-w-2 rounded-full bg-green-400"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>

              <button className="border text-sm px-4 py-1 rounded-sm font-medium cursor-pointer">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
