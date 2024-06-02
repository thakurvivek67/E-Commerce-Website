import React, { useState } from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import CartE from "./components/cart/CartE";
import ContextProviderE from "./components/store/ContextProviderE";

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
      <List />
    </ContextProviderE>
  );
}

export default App;
