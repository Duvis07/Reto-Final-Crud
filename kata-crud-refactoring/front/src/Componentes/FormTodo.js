import React, { useContext, useState, useRef, Fragment } from "react";
import {  HOST_API } from '../Componentes/reducer';
import { Store } from '../Componentes/Store';
import "./Styles.css";

export const FormTodo = ({ groupList }) => {
  const formRef = useRef(null);

  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      completed: false,
    };

    fetch(HOST_API + "/todo", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
    };

    fetch(HOST_API + "/todo", {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  return (
    <form ref={formRef} className="InArriba">
      <input
        className="Input"
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer hoy?"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value });
        }}
      ></input>
      {item.id && (
        <button id="Actualizar" className="btn btn-primary" onClick={onEdit}>
          Actualizar
        </button>
      )}
      {!item.id && (
        <button id="Agregar" className="btn btn-primary" onClick={onAdd}>
          Crear
        </button>
      )}
    </form>
  );
};

export default FormTodo;

