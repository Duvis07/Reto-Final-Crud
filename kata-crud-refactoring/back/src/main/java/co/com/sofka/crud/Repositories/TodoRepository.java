package co.com.sofka.crud.Repositories;

import co.com.sofka.crud.Models.TodoModel;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<TodoModel, Long> {
}
