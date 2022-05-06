import React, { useContext, useState, useRef, Fragment } from "react";
import { HOST_API } from "../Componentes/reducer";
import { Store } from "../Componentes/Store";
import "./Styles.css";

export const FormTodo = ({ groupListId }) => {
  const formRef = useRef(null);

  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);
  /**
   *
   * nuevo
   */
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasWritten, sethasWritten] = useState(false);

  const onAdd = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    sethasWritten(false);

    const request = {
      name: state.name,
      id: null,
      completed: false,
      groupListId: groupListId,
    };

    fetch(HOST_API + "/todo", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
      //duda
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
      groupListId: groupListId,
    };

    fetch(HOST_API + "/todo", {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
      //duda
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
    <Fragment>
      <form ref={formRef} className="InArriba">
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="¿Qué piensas hacer hoy?"
          defaultValue={item.groupListId === groupListId ? item.name : ""}
          onChange={(event) => {
            sethasWritten(true);
            setIsDisabled(event.target.value.length > 3 ? false : true);
            setState({ ...state, name: event.target.value });
          }}
        />
          {item.id && item.groupListId === groupListId && <button className="updateButton" onClick={onEdit}>Actualizar</button>}
    {!item.id && <button disabled={isDisabled} className='CreateButton' onClick={onAdd}>Crear</button>}
      </form>
      {isDisabled && hasWritten && <span className="MinimunLength">Minimo 4 caracteres</span>}
    </Fragment>
  );
};

export default FormTodo;
