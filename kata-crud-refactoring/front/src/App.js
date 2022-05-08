import React from "react";
import List from "./Componentes/List.js";
import Footer from "./Componentes/Footer.js";

/**
 * @author Duvan Botero
 */

import { StoreProvider } from "./Componentes/StoreProvider";

import FormTodoList from "./Componentes/FormTodoList";

function App() {
  return (
    <StoreProvider>
      <h3 className="Title">TO-DO LIST</h3>
      <div className="Div">
        <FormTodoList />
      </div>
      <div className="Div">
        <List />
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
