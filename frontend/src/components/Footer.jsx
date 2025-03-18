import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 gap-14 text-sm">
      <div>
        <img src={assets.logo} alt="logo" className="w-32 mb-5" />
        <p className="w-full sm:w-2/3 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          corrupti cupiditate sint corporis mollitia ullam exercitationem
          placeat labore aliquam, similique magnam praesentium accusamus maxime
          quibusdam numquam explicabo optio laborum odio id temporibus,
          veritatis suscipit. Numquam.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About Us</li>
          <li>Delivary</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl mb-5">Get in touch</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+921-3456789</li>
          <li>shop@forever.com</li>
        </ul>
      </div>
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2025. forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
