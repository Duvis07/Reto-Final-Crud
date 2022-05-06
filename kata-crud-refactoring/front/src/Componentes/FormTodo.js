import React, { useContext, useState, useRef, Fragment } from "react";
import { HOST_API } from "../Componentes/reducer";
import { Store } from "../Componentes/Store";
import "./Styles.css";

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

  const onAdd = (event) => {
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

  const onEdit = (event) => {
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

  return (
    <Fragment>
      <form ref={formRef} >
        <input
        className="inputDentro"
          placeholder="Agrega una Tarea"
          type="text"
          name="name"
          defaultValue={item.groupListId === groupListId ? item.name : ""}
          onChange={(event) => {
            sethasWritten(true);
            setIsDisabled(event.target.value.length > 3 ? false : true);
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        {item.id && item.groupListId === groupListId && (
          <button  className="editar" onClick={onEdit}>
            Actualizar
          </button>
        )}
        {!item.id && (
          <button
            disabled={isDisabled}
            className="agregar"
            onClick={onAdd}
          >
            Agregar
          </button>
        )}
      </form>
      {isDisabled && hasWritten && (
        <span className="MinimunLength">Minimo 5 caracteres</span>
      )}
    </Fragment>
  );
};

export default FormTodo;
