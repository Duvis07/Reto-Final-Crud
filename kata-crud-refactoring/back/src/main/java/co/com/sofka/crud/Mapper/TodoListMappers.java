package co.com.sofka.crud.Mapper;

import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Models.TodoListModel;
/**
 * @author Duvan Botero
 * @version 1.0

 */
public class TodoListMappers {
    /**
     * @autor Duvan Botero
     * todoListDtoATodoListModel transforma  datos de un objetoDTO  a una entidad
     * @param todoListDTO
     * @return
     */
    public TodoListModel todoListDtoATodoListModel(TodoListDTO todoListDTO) {
        TodoListModel todoListModel = new TodoListModel();
        todoListModel.setId(todoListDTO.getId());
        todoListModel.setName(todoListDTO.getName());

        return todoListModel;
    }

    /**
     * @autor Duvan Botero
     * todoListModelAtodoListDto transforma  datos de una entidad a un objetoDTO
     * @param todoListModel
     * @return
     */
    public TodoListDTO todoListModelAtodoListDto(TodoListModel todoListModel) {
        TodoListDTO todoListDTO = new TodoListDTO();
        todoListDTO.setId(todoListModel.getId());
        todoListDTO.setName(todoListModel.getName());

        return todoListDTO;
    }

}
