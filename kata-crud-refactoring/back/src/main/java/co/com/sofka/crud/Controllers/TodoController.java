package co.com.sofka.crud.Controllers;

import co.com.sofka.crud.Models.TodoModel;
import co.com.sofka.crud.Services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService service;

    @CrossOrigin
    @GetMapping(value = "api/todo")
    public Iterable<TodoModel> list(){
        return service.list();
    }

    @CrossOrigin
    @PostMapping(value = "api/todo")
    public TodoModel save(@RequestBody TodoModel todoModel){
        return service.save(todoModel);
    }

    @PutMapping(value = "api/todo")
    public TodoModel update(@RequestBody TodoModel todoModel){
        if(todoModel.getId() != null){
            return service.save(todoModel);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public TodoModel get(@PathVariable("id") Long id){
        return service.get(id);
    }

}