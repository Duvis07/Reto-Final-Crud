import { createContext } from "react";
/**
 * @version 1.0
 *@author Duvan Botero
 *Estados iniciales de las tareas
 *Estados iniciales de las listas
 */

export const initialState = {
  todo: { list: [], item: {} },
  lists: { list: [], item: {} },
};
export const Store = createContext(initialState);
