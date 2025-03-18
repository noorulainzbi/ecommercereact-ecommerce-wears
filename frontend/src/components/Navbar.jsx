import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, totalItems } = useShopContext();
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-36 " />
      </Link>
      <ul className="hidden gap-5 sm:flex text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p>HOME</p>
          <hr className="w-2/4 mx-auto bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <hr className="w-2/4 mx-auto hidden" />
        </NavLink>
        <NavLink to="/collections" className="flex flex-col gap-1 items-center">
          <p>COLLECTIONS</p>
          <hr className="w-2/4 mx-auto hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <hr className="w-2/4 mx-auto  hidden" />
        </NavLink>
      </ul>
      <div className="flex gap-6">
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <Link to="/login">
            {" "}
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-5 cursor-pointer"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 py-3 px-5 w-36 rounded bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link className="relative" to="/cart">
          <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px]  w-4  bg-black text-white aspect-square text-center rounded-full text-[8px] leading-4">
            {totalItems()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer block sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      {/* sidebar menu */}

      <div
        className={`absolute bottom-0 top-0 right-0 bg-white overflow-hidden transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown-icon"
              className="h-6 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collections"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
