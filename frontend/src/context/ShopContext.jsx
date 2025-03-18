import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const AddToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }
    setCartItems((prevCart) => {
      return {
        ...prevCart,
        [itemId]: {
          ...prevCart[itemId],
          [size]: (prevCart[itemId]?.[size] || 0) + 1,
        },
      };
    });
  };

  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prevCart) => {
      return {
        ...prevCart,
        [itemId]: { ...prevCart[itemId], [size]: quantity },
      };
    });
  };

  const deleteItem = (itemId, size) => {
    setCartItems((prevCart) => {
      if (!prevCart[itemId]) return prevCart;

      const updatedSizes = { ...prevCart[itemId] };
      delete updatedSizes[size];

      if (Object.keys(updatedSizes).length === 0) {
        const updatedCart = { ...prevCart };
        delete updatedCart[itemId];
        return updatedCart;
      }

      return { ...prevCart, [itemId]: updatedSizes };
    });
  };

  const totalItems = () => {
    let total = 0;
    for (let item in cartItems) {
      for (let size in cartItems[item]) {
        total += cartItems[item][size];
      }
    }
    return total;
  };

  const getTotalAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const itemInfo = products.find((product) => product._id === itemId);

      if (!itemInfo) return total;

      const itemTotal = Object.values(sizes).reduce(
        (sum, quantity) => sum + itemInfo.price * quantity,
        0
      );

      return total + itemTotal;
    }, 0);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    AddToCart,
    totalItems,
    updateQuantity,
    deleteItem,
    getTotalAmount,
    navigate,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === null) throw Error`context can not be use outside a component`;
  return context;
};
