package co.com.sofka.crud.Repositories;

import co.com.sofka.crud.Models.TodoListModel;
import org.springframework.data.repository.CrudRepository;

/**
 * @version  1.0
 * @Autor Duvan Botero
 */
public interface TodoListRepository extends CrudRepository<TodoListModel, Long> {
}


