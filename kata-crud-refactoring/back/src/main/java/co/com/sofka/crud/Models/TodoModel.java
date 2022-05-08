package co.com.sofka.crud.Models;

import javax.persistence.*;

/**
 * version 1.0
 * @author Duvan Botero
 * Entidad TodoModel con todos con sus correspondientes atributos, metodos set y get y
 * con sus contructores correspondientes
 */
@Entity
@Table(name = "tareas")
public class TodoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private boolean completed;
    private String name;
    private Long groupListId;


    public TodoModel() {

    }

    public TodoModel(Long id, boolean completed, String name, Long groupListId) {
        this.id = id;
        this.completed = completed;
        this.name = name;
        this.groupListId = groupListId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(Long groupListId) {
        this.groupListId = groupListId;
    }
}