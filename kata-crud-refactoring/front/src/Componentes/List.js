import React, { Fragment, useContext, useEffect } from "react";
import FormTodo from "../Componentes/FormTodo.js";
import { Store } from "../Componentes/Store.js";
import { HOST_API } from "../Componentes/reducer";
import "./Styles.css";

export const List = () => {
  const { dispatch, state: { todo, lists },
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

  //nuevo

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
                        className="deleteListButton"
                        onClick={() => onDeleteList(list.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormTodo groupListId={list.id} />
                    </td>
                  </tr>
                  <tr>
                    <td>Tarea</td>
                    <td>¿Completado?</td>
                  </tr>
                  {currentTodos.map((todo) => {
                    if (todo.groupListId === list.id) {
                      return (
                        <tr
                          key={todo.id}
                          style={todo.completed ? decorationDone : {}}
                        >
                          <td>{todo.name}</td>
                          <td>
                            <input
                              type="checkbox"
                              defaultChecked={todo.completed}
                              onChange={(event) =>
                                onChange(event, todo, list.id)
                              }
                            ></input>
                          </td>
                          <td>
                            <button
                              className="DeleteButton"
                              onClick={() => onDelete(todo.id)}
                            >
                              Eliminar
                            </button>
                          </td>
                          <td>
                            <button
                              className="EditButton"
                              onClick={() => onEdit(todo)}
                            >
                              Editar
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
