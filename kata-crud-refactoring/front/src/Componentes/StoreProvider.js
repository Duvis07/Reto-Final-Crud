import React, { useReducer } from "react";
import { reducer } from "../Componentes/reducer";
import { initialState, Store } from "../Componentes/Store";

/**
 * @version 1.0
 * @author Duvan Botero
 * mediante el storeProvider se le pasa el  contexto a todos 
 * los que hereden  del  padre para no tener que ser instanciados
 * en cada componente
 * 
 */

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
