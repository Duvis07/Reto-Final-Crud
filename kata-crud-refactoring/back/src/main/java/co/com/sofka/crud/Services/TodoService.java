package co.com.sofka.crud.Services;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Mapper.TodoListMappers;
import co.com.sofka.crud.Mapper.TodoMappers;
import co.com.sofka.crud.Models.TodoListModel;
import co.com.sofka.crud.Models.TodoModel;
import co.com.sofka.crud.Repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    TodoMappers mappers = new TodoMappers();

    public Iterable<TodoDTO> list() {
        Iterable<TodoModel> list = repository.findAll();
        List<TodoDTO> listDTO = new ArrayList<TodoDTO>();
        list.forEach(todoELement -> {
            listDTO.add(mappers.todoModelAtodoDto(todoELement));

        });
        Iterable<TodoDTO> iterableDTO = listDTO;
        return listDTO;
    }

    public TodoDTO save(TodoDTO todoDTO) {
        TodoModel todoModel = mappers.todoDtoAtodoModel(todoDTO);
        if (todoModel.getName().length()>3){
            todoModel = repository.save(todoModel);
        }
        todoDTO.setId(todoModel.getId());
        return todoDTO;
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public TodoModel get(Long id){
         return repository.findById(id).orElseThrow();
    }

}
