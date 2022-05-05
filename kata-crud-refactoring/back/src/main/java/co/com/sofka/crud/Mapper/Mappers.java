package co.com.sofka.crud.Mapper;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Models.TodoListModel;
import co.com.sofka.crud.Models.TodoModel;
import org.modelmapper.ModelMapper;




public class Mappers {
    private final ModelMapper mapper = new ModelMapper();


    /*
    De una entidad TodoMoldel a un TodoDTO
    */

    public TodoModel mapTodoModel(TodoDTO todoModelDTO) {
        return mapper.map(todoModelDTO, TodoModel.class);
    }

    /*
        De una entidad TodoListMoldel a un TodoListDTO
        */
    public TodoListModel mapTodoModel(TodoListDTO todoListDTO) {
        return mapper.map(todoListDTO, TodoListModel.class);
    }

    /*
           De un todoDto a una identidad TodoModel
            */
    public TodoDTO mapTodoModelDTO(TodoModel todoModel) {
        return mapper.map(todoModel, TodoDTO.class);
    }


    /*
          De un todoListDto a una identidad TodoListModel
           */
    public TodoListDTO mapTodoModelDTO(TodoListDTO todoListModel) {
        return mapper.map(todoListModel, TodoListDTO.class);
    }
}
