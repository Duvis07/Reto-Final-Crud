package co.com.sofka.crud.Mapper;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.Models.TodoModel;
/**
 * version 1.0
 * @author Duvan Botero
 */

public class TodoMappers {

    /**
     * @autor Duvan Botero
     * todoDtoAtodoModel  transforma  datos de un objetoDTO  a una entidad
     * @param todoDTO
     * @return
     */
    public TodoModel todoDtoAtodoModel (TodoDTO todoDTO) {
        TodoModel todoModel = new TodoModel();
        todoModel.setId(todoDTO.getId());
        todoModel.setName(todoDTO.getName());
        todoModel.setCompleted(todoDTO.isCompleted());
        todoModel.setGroupListId(todoDTO.getGroupListId());
        return todoModel;
    }

    /**
     * @autor Duvan Botero
     * todoModelAtodoDto transforma  datos de una entidad a un objetoDTO
     * @param todoModel
     * @return
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