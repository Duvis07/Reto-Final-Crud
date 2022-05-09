import React, { useContext, useState, useRef, Fragment } from "react";
import { HOST_API } from "../Conexiones/Conexion.js";
import { Store } from "../Componentes/Store";
import "../EstilosCss/FormTodo.css";
import "../index.css";

/**¨
 * @version 1.0
 *@author Duvan Botero
 *FormTodo funcion para crear el grupo de tareas
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
   *@version 1.0
   * @author Duvan Botero
   * * onAdd para agregar el grupo de tareas
   */

  const onAdd = (event) => {
    event.preventDefault();
    const request = {
      name: state.name,
      id: null,
      isCompleted: false,
      groupListId: groupListId,
    };

    /**
     * @version 1.0
     * @author Duvan Botero
     * ruta que conecta con el método POST del back-end para agregar cada una de las tareas
     */
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
   *@version 1.0
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

    /**
     * @version 1.0
     * @author Duvan Botero
     * ruta que conecta con el método PUT del back-end para actualizar cada una de las tareas
     */

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
   * @version 1.0
   * @author Duvan Botero
   * Formulario para agregar las tareas, con sus correspodientes botones
   * de actualizar y agregar
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
            setIsDisabled(event.target.value.length >= 10 ? false : true);
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
        /**
         * @version 1.0
         * @author Duvan Botero
         * Mensaje de validacion campos requeridos
         */
        <span className="MinimunLengthTarea">Minimo 10 caracteres</span>
      )}
    </Fragment>
  );
};

export default FormTodo;
