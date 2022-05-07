package co.com.sofka.crud.Controllers;

import co.com.sofka.crud.DTO.TodoDTO;
import co.com.sofka.crud.Models.TodoModel;
import co.com.sofka.crud.Services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Autor Duvan Botero
 * TodoController de tareas, aca se declara el endpoint api/todo para hacer
 * nuestra conexion con el  Front-End
 * Se declaran tambien los metodos guardar, editar , eliminar
 */

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService service;

    @CrossOrigin
    @GetMapping(value = "api/todo")
    public Iterable<TodoDTO> list(){
        return service.list();
    }

    @CrossOrigin
    @PostMapping(value = "api/todo")
    public TodoDTO save(@RequestBody TodoDTO todoDTO){
        return service.save(todoDTO);
    }

    @PutMapping(value = "api/todo")
    public TodoDTO update(@RequestBody TodoDTO todoDTO){
        if(todoDTO.getId() != null){
            return service.save(todoDTO);
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