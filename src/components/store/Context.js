import React from "react";

const Context = React.createContext({
  Cart: [],
  AddItems: (item) => {},
  RemoveItems: (item) => {},
  AddToMenu: (item) => {},
  MenuItems: [],
});

export default Context;
