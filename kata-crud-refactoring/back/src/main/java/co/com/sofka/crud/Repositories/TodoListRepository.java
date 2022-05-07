package co.com.sofka.crud.Repositories;

import co.com.sofka.crud.Models.TodoListModel;
import org.springframework.data.repository.CrudRepository;


/**
 * @Autor Duvan Botero
 * TodoListRepository se declara los métodos que se implementaran en el controller
 */
public interface TodoListRepository extends CrudRepository<TodoListModel, Long> {
}


