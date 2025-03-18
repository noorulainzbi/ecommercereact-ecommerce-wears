import React from "react";
import Title from "../components/Title.jsx";
import NewsLetterBox from "../components/NewsLetterBox.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
const About = () => {
  return (
    <>
      <div className="text-2xl pt-8 border-t text-center">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center  gap-6 md:w-2/4 text-gray-6 ">
          <p>
            Forever is more than just an online store—it's a destination for
            fashion lovers who value style, quality, and affordability. We bring
            you the latest trends with a focus on timeless designs that make you
            look and feel your best. From casual wear to statement outfits, we
            have everything you need to elevate your wardrobe.
          </p>
          <p>
            At Forever, we believe in timeless fashion that blends style with
            quality. Our curated collections offer trendy, high-quality apparel
            and accessories for every occasion. Whether you're looking for
            everyday essentials or statement pieces, we have something for you.
          </p>
          <b>OUR MISSION</b>
          <p>
            Our mission is to provide an exceptional shopping experience with
            seamless navigation and top-notch customer service. We are committed
            to sustainability, ethical sourcing, and staying ahead of fashion
            trends. Shop with confidence and make every moment stylish—only at
            Forever.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col sm:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Forever, we prioritize quality by sourcing premium materials and
            ensuring rigorous quality checks on every product. Our commitment to
            excellence guarantees durable, stylish, and comfortable fashion you
            can trust.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            At Forever, we offer a seamless shopping experience with easy
            navigation, secure payments, and fast delivery. Our goal is to make
            fashion accessible and hassle-free for you.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At Forever, we pride ourselves on exceptional customer service with
            prompt support and hassle-free returns. Your satisfaction is our top
            priority, and we're always here to help.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </>
  );
};

export default About;
