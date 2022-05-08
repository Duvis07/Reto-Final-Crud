package co.com.sofka.crud.Models;

import javax.persistence.*;
import java.util.Set;

/**
 * version 1.0
 * @author Duvan Botero
 * Entidad TodoListModel con todos con sus correspondientes atributos, metodos set y get y
 * con sus contructores correspondientes, ademas se hace la relacion de uno a muchos entre las tablas
 * tareas de la entidad (TodoModel) con la tabla  listas de la entidad (TodolistModel)
 */
@Entity
@Table(name = "listas")
public class TodoListModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String name;
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "groupListId")
    private Set<TodoModel> grupoTodoList;

    public TodoListModel() {
    }


    public TodoListModel(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
