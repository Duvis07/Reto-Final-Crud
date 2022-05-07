import React, { useContext, useState, useRef, Fragment } from "react";
import { HOST_API } from "../Conexiones/Conexion.js";
import { Store } from "../Componentes/Store.js";
import "../Estilos/FormTodoList.css";
import "../index.css";

const FormTodoList = () => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { lists },
  } = useContext(Store);
  const item = lists.item;
  const [state, setState] = useState(item);
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasWritten, sethasWritten] = useState(false);

  const onAdd = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    sethasWritten(false);
    const request = {
      name: state.name,
      id: null,
    };

    fetch(HOST_API + "/todoslist", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "add-list", item: list });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  return (
    <Fragment>
      <form ref={formRef}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Nombre de tu lista"
          defaultValue={item.name}
          id="listForms"
          onChange={(event) => {
            sethasWritten(true);
            setIsDisabled(event.target.value.length >= 5 ? false : true);
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        {!item.id && (
          <button className="crear" disabled={isDisabled} onClick={onAdd}>
            CREATE
          </button>
        )}

        {isDisabled && hasWritten && (
          <p className="MinimunLength">Minimo 5 maximo 18 caracteres</p>
        )}
      </form>
    </Fragment>
  );
};

export default FormTodoList;
