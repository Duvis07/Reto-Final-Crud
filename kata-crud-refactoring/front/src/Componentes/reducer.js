
export const HOST_API = "http://localhost:8086/api";

export function reducer(state, action) {
  switch (action.type) {
    case "update-item":
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      todoUpItem.list = listUpdateEdit;
      todoUpItem.item = {};
      return { ...state, todo: todoUpItem };
    case "delete-item":
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      return { ...state, todo: todoUpDelete };
    case "update-list":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };
    case "edit-item":
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit };
    case "add-item":
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: { list: todoUp, item: {} } };

    /**
     * Lo nuevo
     */

    case "delete-list":
      const listUpDelete = state.lists;
      const lisOfListUpdate = listUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });

      listUpDelete.list = lisOfListUpdate;
      return { ...state, lists: listUpDelete };
    case "update-listOfList":
      const listUpList = state.lists;
      listUpList.list = action.list;
      return { ...state, lists: listUpList };
    case "add-list":
      const listUp = state.lists.list;
      listUp.push(action.item);
      return { ...state, lists: { list: listUp, item: {} } };

    default:
      return state;
  }
}
export default reducer;