package co.com.sofka.crud.Mapper;


import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Models.TodoListModel;

public class TodoListMappers {


    public TodoListModel todoListDtoATodoListModel(TodoListDTO todoListDTO) {
        TodoListModel todoListModel = new TodoListModel();
        todoListModel.setId(todoListDTO.getId());
        todoListModel.setName(todoListDTO.getName());

        return todoListModel;
    }

    public TodoListDTO todoListModelAtodoListDto(TodoListModel todoListModel) {
        TodoListDTO todoListDTO = new TodoListDTO();
        todoListDTO.setId(todoListModel.getId());
        todoListDTO.setName(todoListModel.getName());

        return todoListDTO;
    }


}



