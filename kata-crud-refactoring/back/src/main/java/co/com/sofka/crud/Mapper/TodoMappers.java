package co.com.sofka.crud.Mapper;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.Models.TodoModel;

public class TodoMappers {


    /*
       De una entidad TodoMoldel a un TodoDTO
       */
    public TodoModel todoDtoAtodoModel (TodoDTO todoDTO) {
        TodoModel todoModel = new TodoModel();
        todoModel.setId(todoDTO.getId());
        todoModel.setName(todoDTO.getName());
        todoModel.setCompleted(todoDTO.isCompleted());
        todoModel.setGroupListId(todoDTO.getGroupListId());
        return todoModel;
    }

    /*
        De una entidad TodoListMoldel a un TodoListModel
        */


    public TodoDTO  todoModelAtodoDto (TodoModel todoModel) {
        TodoDTO todoDTO = new TodoDTO();
        todoDTO.setId(todoModel.getId());
        todoDTO.setName(todoModel.getName());
        todoDTO.setCompleted(todoModel.isCompleted());
        todoDTO.setGroupListId(todoModel.getGroupListId());
        return todoDTO;
    }


}