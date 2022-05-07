package co.com.sofka.crud.Services;

import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Mapper.TodoListMappers;
import co.com.sofka.crud.Models.TodoListModel;

import co.com.sofka.crud.Repositories.TodoListRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoListService {

    @Autowired
    private TodoListRepository repository;

    TodoListMappers mappers = new TodoListMappers();

    public Iterable<TodoListDTO> list() {
        Iterable<TodoListModel> list = repository.findAll();
        List<TodoListDTO> listDTO = new ArrayList<TodoListDTO>();
        list.forEach(todoELement -> {
            listDTO.add(mappers.todoListModelAtodoListDto(todoELement));

        });
        Iterable<TodoListDTO> iterableDTO = listDTO;
        return listDTO;
    }

    public TodoListDTO save(TodoListDTO todoListDTO) {
        TodoListModel todoListModel = mappers.todoListDtoATodoListModel(todoListDTO);
        if (todoListModel.getName().length() > 3) {
            todoListModel = repository.save(todoListModel);
        }
        todoListDTO.setId(todoListModel.getId());
        return todoListDTO;
    }


    public void delete(Long id) {
        repository.delete(get(id));
    }

    public TodoListModel get(Long id) {
        return repository.findById(id).orElseThrow();
    }

}