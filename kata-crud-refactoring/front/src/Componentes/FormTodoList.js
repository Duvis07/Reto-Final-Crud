import React, { useContext, useState, useRef, Fragment } from "react";
import { HOST_API } from "../Conexiones/Conexion.js";
import { Store } from "../Componentes/Store.js";
import "../EstilosCss/FormTodoList.css";
import "../index.css";

/**
 *@version 1.0
 * @author Duvan Botero
 *  creacion de las listas para las tareas
 */

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

  /**
   *@version 1.0
   * @author Duvan Botero
   * onAdd es la que me agrega listas en la tabla
   */

  const onAdd = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    sethasWritten(false);
    const request = {
      name: state.name,
      id: null,
    };

    /**
     * @version 1.0
     * @author Duvan Botero
     * ruta que conecta con el método POST del back-end para agregar cada una de las listas
     */
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

  /**
   * @version 1.0
   * @author Duvan Botero
   * * Formulario para agregar una lista, con sus  boton de crear,
   * se hacen validaciones de minimo 5 caracteres para crear una lista
   */

  return (
    <Fragment>
      <form ref={formRef}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Agrega una Lista"
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
          /**
           * @version 1.0
           * @author Duvan Botero
           * validaciones campos requeridos
           */
          <p className="MinimunLength">Minimo 5 caracteres</p>
        )}
      </form>
    </Fragment>
  );
};

export default FormTodoList;
