import { createContext } from "react";
/**
 *@author Duvan Botero
 */

export const initialState = {
  todo: { list: [], item: {} },
  lists: { list: [], item: {} },
};
export const Store = createContext(initialState);
