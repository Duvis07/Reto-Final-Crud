package co.com.sofka.crud.Services;

import co.com.sofka.crud.Models.TodoListModel;

import co.com.sofka.crud.Repositories.TodoListRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {

    @Autowired
    private TodoListRepository repository;

    public Iterable<TodoListModel> list() {
        return repository.findAll();
    }

    public TodoListModel save(TodoListModel todoListModel) {
        return repository.save(todoListModel);
    }

    public void delete(Long id) {
        repository.delete(get(id));
    }

    public TodoListModel get(Long id) {
        return repository.findById(id).orElseThrow();
    }

}
