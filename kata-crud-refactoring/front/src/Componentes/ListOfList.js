import React, { useContext, useEffect } from "react";
import { HOST_API } from "../Componentes/reducer.js";
import { Store } from "../Componentes/Store.js";

const ListOfList = () => {
  const {
    dispatch,
    state: { lists },
  } = useContext(Store);
  const currentList = lists.list;

  useEffect(() => {
    fetch(HOST_API + "/todoslist")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-listOfList", list });
      });
  }, [dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todoslist", {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-list", id });
    });
  };

  return (
    <div>
      <table>
        <tbody>
          {currentList.map((lists) => {
            return (
              <div>
                <tr>
                  <td>{lists.name}</td>
                  <td>
                    <button onClick={() => onDelete(lists.id)}>Eliminar</button>
                  </td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfList;
