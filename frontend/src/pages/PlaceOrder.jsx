import React, { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { useShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const { navigate } = useShopContext();
  function handlePaymentMethod(method) {
    setPaymentMethod(method);
  }
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4 sm:pt-14 min-h-[80vh]">
      {/* ----------Left Side ----------------- */}
      <div className="flex flex-col w-full sm:max-w-[480px] gap-4">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVARY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
        </div>

        <Input type="email" placeholder="Email address" />
        <Input type="text" placeholder="Street" />

        <div className="flex gap-3">
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <Input type="number" placeholder="Zipcode" />
          <Input type="text" placeholder="Country" />
        </div>
        <Input type="number" placeholder="Number" />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHODS" />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items center gap-3 border p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === "stripe" ? "bg-green-400" : ""
                }`}
                onClick={() => handlePaymentMethod("stripe")}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="stripe" />
            </div>
            <div className="flex items center gap-3 border p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  paymentMethod === "razorpay" ? "bg-green-400" : ""
                }`}
                onClick={() => handlePaymentMethod("razorpay")}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div className="flex items center gap-3 border p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  paymentMethod === "cod" ? "bg-green-400" : ""
                }`}
                onClick={() => handlePaymentMethod("cod")}
              ></p>
              <p className="text-sm text-gray- font-medium mx-4">
                CASH ON DELIVARY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              className="bg-black text-white px-16 p-4 text-sm"
              onClick={() => navigate("/orders")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
