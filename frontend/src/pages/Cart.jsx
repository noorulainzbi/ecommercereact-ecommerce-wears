import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets.js";
import CartTotal from "../components/CartTotal.jsx";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    deleteItem,
    navigate,
  } = useShopContext();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const newCartData = [];
    for (let item in cartItems) {
      for (let size in cartItems[item]) {
        newCartData.push({
          _id: item,
          size,
          quantity: cartItems[item][size],
        });
      }
    }
    setCartData(newCartData);
  }, [cartItems]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex  items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData?.image?.[0]}
                  alt=""
                />
                <div>
                  <p classNametext-xs sm:text-lg font-medium>
                    {productData?.name}
                  </p>
                  <div className="flex items-center gap-5 mt-3">
                    <p>
                      {currency}
                      {productData?.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (!value || value <= 0) return;
                  updateQuantity(item._id, item.size, value);
                }}
              />
              <img
                onClick={() => deleteItem(item._id, item.size)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm py-2 px-5 mt-5 cursor-pointer"
            >
              PROCEED TO ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
