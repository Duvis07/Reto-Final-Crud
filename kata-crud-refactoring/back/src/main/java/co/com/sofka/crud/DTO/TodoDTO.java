package co.com.sofka.crud.DTO;

/**
 * @author Duvan Botero
 * @version 1.0
 * clase todoDTO con sus atributos y metodos get y set
 * clase todoDTO para la transferencia de datos
 */

public class TodoDTO {

    private Long id;
    private boolean completed;
    private String name;
    private Long groupListId;

    public TodoDTO() {
    }

    public TodoDTO(Long id, boolean completed, String name, Long groupListId) {
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