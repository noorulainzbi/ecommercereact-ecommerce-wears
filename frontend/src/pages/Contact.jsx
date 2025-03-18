import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <>
      <div className="text-2xl pt-10 border-t text-center">
        <Title text1="CONTACT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10 justify-center mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (451) 987-6434 <br /> Email: Admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border text-black  px-8 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </>
  );
};

export default Contact;
