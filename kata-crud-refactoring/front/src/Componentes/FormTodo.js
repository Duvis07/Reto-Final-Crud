import React, { useContext, useState, useRef, Fragment } from "react";
import { HOST_API } from "../Conexiones/Conexion.js";
import { Store } from "../Componentes/Store";
import "../EstilosCss/FormTodo.css";
import "../index.css";

/**
 *@author Duvan Botero

 */

const FormTodo = ({ groupListId }) => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasWritten, sethasWritten] = useState(false);

  /**
   *
   * @author Duvan Botero
   */

  const onAdd = (event) => {
    event.preventDefault();
    const request = {
      name: state.name,
      id: null,
      isCompleted: false,
      groupListId: groupListId,
    };

    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  /**
   *
   * @author Duvan Botero
   */

  const onEdit = (event) => {
    event.preventDefault();
    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
      groupListId: groupListId,
    };

    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  /**
   * @author Duvan Botero
   */
  return (
    <Fragment>
      <form ref={formRef}>
        <input
          className="inputDentro"
          placeholder="Agrega una Tarea"
          type="text"
          name="name"
          defaultValue={item.groupListId === groupListId ? item.name : ""}
          onChange={(event) => {
            sethasWritten(true);
            setIsDisabled(event.target.value.length >= 8 ? false : true);
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        {item.id && item.groupListId === groupListId && (
          <button className="actualizar" onClick={onEdit}>
            UPDATE
          </button>
        )}
        {!item.id && (
          <button disabled={isDisabled} className="agregar" onClick={onAdd}>
            ADD
          </button>
        )}
      </form>
      {isDisabled && hasWritten && (
        <span className="MinimunLengthTarea">Minimo 8 caracteres</span>
      )}
    </Fragment>
  );
};

export default FormTodo;
