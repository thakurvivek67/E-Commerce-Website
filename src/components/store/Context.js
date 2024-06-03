import React from "react";

const Context = React.createContext({
  Cart: [],
  AddMedItems: (item) => {},
  RemoveMedItems: (item) => {},
  AddToMenu: (item) => {},
  MenuItems: [],
});

export default Context;
