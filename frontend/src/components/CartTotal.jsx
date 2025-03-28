import React from "react";
import Title from "./Title.jsx";
import { useShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, delivery_fee, getTotalAmount } = useShopContext();
  getTotalAmount();

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTALS" />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getTotalAmount()}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping fee</p>
          <p>
            {currency} {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getTotalAmount() > 0 ? getTotalAmount() + delivery_fee : ""}{" "}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
