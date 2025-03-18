import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import RelatedProducts from "../components/RelatedProducts.jsx";
const Product = () => {
  const { productId } = useParams();
  const { products, currency, AddToCart } = useShopContext();
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const productDetails = useMemo(() => {
    return (
      products.find((item) => String(item._id) === String(productId)) || null
    );
  }, [productId]);
  useEffect(() => {
    if (productDetails?.image?.length) {
      setImage(productDetails.image[0]);
    }
  }, [productDetails]);

  const handleImageClick = (img) => setImage(img);

  return productDetails ? (
    <div className="pt-10 border-t-2 transition-opacity duration-500 ease-in opacity-100">
      <div className="flex flex-col gap-12 sm:flex-row pt-10">
        {/*------------- product images -----------------------*/}
        <div className="flex flex-1 gap-3 flex-col-reverse sm:flex-row">
          <div className="flex sm:flex-col justify-center overflow-x-auto sm:overflow-y-scroll sm:justify-normal">
            {productDetails.image.map((img, ind) => {
              return (
                <img
                  src={img}
                  key={ind}
                  onClick={() => handleImageClick(img)}
                  className="w-[24%] sm:w-full sm:mb-3 cursor-pointer flex-shrink-0"
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full" />
          </div>
        </div>
        {/* ------------- product info ---------------- */}
        <div className="flex-1">
          <h1 className="font-medium mb-3 text-2xl"> {productDetails.name}</h1>
          <div className="flex gap-1 items-center mb-3">
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img
              src={assets.star_dull_icon}
              alt="star-icon"
              className="w-3.5"
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 font-medium text-3xl">
            {currency} {productDetails.price}
          </p>
          <p className="mt-5 md:w-4/5 text-gray-500">
            {productDetails.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-xl">Select Size</p>
            {productDetails.sizes?.length > 0 ? (
              <div className="flex gap-2">
                {productDetails.sizes.map((size, index) => (
                  <button
                    className={`border border-gray-500 px-4 py-2 bg-gray-100 ${
                      size === selectedSize ? "border-orange-500" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                    key={index}
                  >
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No sizes available</p>
            )}
          </div>
          <button
            className="px-8 py-3 bg-black text-white text-sm active:bg-gray-700 cursor-pointer"
            onClick={() => AddToCart(productDetails._id, selectedSize)}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="flex flex-col gap-1 text-sm mt-5 text-gray-600">
            <p>100% Original product.</p>
            <p>Cash on delivery is available for this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* ---------------- product description ------------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="text-sm border px-5 py-3">Description</b>
          <p className="text-sm border px-5 py-3">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border text-gray-500 text-sm p-6">
          <p>
            FOREVER is your one-stop shop for trendy fashion, top electronics,
            and stylish home essentials at unbeatable prices. Enjoy secure
            payments, fast shipping, and hassle-free returns—all in one place!
          </p>
          <p>
            Our eCommerce platform makes buying and selling effortless with
            secure payments and fast delivery. Enjoy a seamless shopping
            experience with the best deals and trusted sellers!
          </p>
        </div>
      </div>
      {/* ------------- realted product ----------------- */}
      <RelatedProducts
        category={productDetails.category}
        subCategory={productDetails.subCategory}
      />
    </div>
  ) : null;
};

export default Product;
