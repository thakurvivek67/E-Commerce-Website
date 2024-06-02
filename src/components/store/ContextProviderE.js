import React, { useState, useEffect } from "react";
import Context from "./Context";

const ContextProviderE = (props) => {
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedMenuItems = localStorage.getItem("MenuItems");
    if (storedMenuItems) {
      setMenuItems(JSON.parse(storedMenuItems));
    }

    // Load cart data from localStorage
    const storedCart = localStorage.getItem("Cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever cart changes
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  const addToMenu = (newItem) => {
    setMenuItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      // Save data to localStorage
      localStorage.setItem("MenuItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const addMedItems = (newItem) => {
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === newItem.id
    );
    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...newItem, quantity: 1 }]);
    }
  };

  const removeMedItems = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const contextValue = {
    cart,
    menuItems,
    addToMenu,
    addMedItems,
    removeMedItems,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProviderE;
