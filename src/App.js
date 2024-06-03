import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Update import to include `Routes`
import Header from "./components/header/Header";
import List from "./components/list/List";
import CartE from "./components/cart/CartE";
import ContextProviderE from "./components/store/ContextProviderE";
import Home from "./components/navlinks/Home";
import About from "./components/navlinks/About";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <ContextProviderE>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <CartE show={cartIsShown} onClose={hideCartHandler} />}
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<List />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ContextProviderE>
  );
}

export default App;
