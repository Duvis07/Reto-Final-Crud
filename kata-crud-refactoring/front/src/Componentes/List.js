import React, { Fragment, useContext, useEffect } from "react";
import FormTodo from "../Componentes/FormTodo.js";
import { Store } from "../Componentes/Store.js";
import { HOST_API } from "../Conexiones/Conexion.js";
import "../Estilos/List.css";
import "../index.css";

export const List = () => {
  const {
    dispatch,
    state: { todo, lists },
  } = useContext(Store);
  const currentTodos = todo.list;
  const currentList = lists.list;

  useEffect(() => {
    fetch(HOST_API + "/todo")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", id });
    });
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo });
  };

  const onChange = (event, todo, groupListId) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
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
      });
  };


  useEffect(() => {
    fetch(HOST_API + "/todoslist")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-listOfList", list });
      });
  }, [dispatch]);

  const onDeleteList = (id) => {
    const deleteAllListItem = todo.list.map((item) => {
      if (item.groupListId === id) {
        onDelete(item.id);
      }
    });

    fetch(HOST_API + "/" + id + "/todoslist", {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-list", id });
    });
  };

  const decorationDone = {
    textDecoration: "line-through",
  };

  return (
    <Fragment>
      <table cellSpacing="0">
        <tbody>
          {currentList.map((list) => {
            return (
              <Fragment key={list.id}>
                <div className="listDiv">
                  <tr>
                    <td id="TitleText">{list.name}</td>
                    <td>
                      <button
                        className="eliminarLista"
                        onClick={() => onDeleteList(list.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormTodo groupListId={list.id} />
                    </td>
                  </tr>

                  <tr>
                    <td className="tdId">ID</td>
                    <td className="tdTarea">TAREA</td>
                    <td className="td">COMPLETADO</td>
                  </tr>
                  {currentTodos.map((todo) => {
                    if (todo.groupListId === list.id) {
                      return (
                        <tr
                          key={todo.id}
                          style={todo.completed ? decorationDone : {}}
                        >
                          <td id="listId">{todo.id}</td>
                          <td id="listName">{todo.name}</td>
                          <td>
                            <input
                              id="box"
                              type="checkbox"
                              defaultChecked={todo.completed}
                              onChange={(event) =>
                                onChange(event, todo, list.id)
                              }
                            ></input>
                          </td>
                          <td>
                            <button
                              className="eliminarTarea"
                              onClick={() => onDelete(todo.id)}
                            >
                              DELETE
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => onEdit(todo)}
                              className="editar"
                            >
                              EDIT
                            </button>
                          </td>
                        </tr>
                      );
                    }
                    return;
                  })}
                </div>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};
export default List;
