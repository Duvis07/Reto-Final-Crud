package co.com.sofka.crud.Repositories;

import co.com.sofka.crud.Models.TodoListModel;
import org.springframework.data.repository.CrudRepository;

public interface TodoListRepository extends CrudRepository<TodoListModel, Long> {
}

