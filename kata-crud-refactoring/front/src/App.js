import React from "react";
import List from "./Componentes/List.js";

import FormTodo from "./Componentes/FormTodo";

import { StoreProvider } from "./Componentes/StoreProvider";

import FormTodoList from "./Componentes/FormTodoList";

function App() {
  return (
    <StoreProvider>
      <h3 className="Title">To-Do List</h3>
      <div className="GlobalDiv">
        <FormTodoList />
      </div>
      <div className="GlobalDiv">
        <List />
      </div>
    </StoreProvider>
  );
}

export default App;
