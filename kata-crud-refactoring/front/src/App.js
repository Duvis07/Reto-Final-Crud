import React, { createContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Form } from "./Componentes/Form";
import { List } from "./Componentes/List";
import { StoreProvider } from "./Componentes/StoreProvider";

export const HOST_API = "http://localhost:8080/api";
export const initialState = {
  todo: { list: [], item: {} },
};
export const Store = createContext(initialState);

function App() {
  return (
    <Fragment>
      <div className="div">
        <h2 id="h2">TO-LIST</h2>
      </div>
      <StoreProvider>
        <Form />
        <List />
      </StoreProvider>
    </Fragment>
  );
}

export default App;
