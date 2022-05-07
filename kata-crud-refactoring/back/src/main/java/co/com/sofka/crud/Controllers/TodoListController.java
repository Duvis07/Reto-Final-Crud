package co.com.sofka.crud.Controllers;


import co.com.sofka.crud.DTO.TodoListDTO;
import co.com.sofka.crud.Models.TodoListModel;
import co.com.sofka.crud.Services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {

    @Autowired
    private TodoListService service;

    @CrossOrigin
    @GetMapping(value = "api/todoslist")
    public Iterable<TodoListDTO> list(){
        return service.list();
    }

    @CrossOrigin
    @PostMapping(value = "api/todoslist")
    public TodoListDTO save(@RequestBody TodoListDTO todoListDTO){
        return service.save(todoListDTO);
    }

    @PutMapping(value = "api/todoslist")
    public TodoListDTO update(@RequestBody TodoListDTO todoListDTO){
        if(todoListDTO.getId() != null){
            return service.save(todoListDTO);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "api/{id}/todoslist")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todoslist")
    public TodoListModel get(@PathVariable("id") Long id){
        return service.get(id);
    }

}