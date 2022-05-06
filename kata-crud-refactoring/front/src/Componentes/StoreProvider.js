import React, { useReducer } from "react";
import { reducer } from "../Componentes/reducer";
import { initialState, Store } from "../Componentes/Store";

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
