package co.com.sofka.crud.DTO;

public class TodoDTO {

    private Long id;

    private boolean completed;
    private String name;
    private String groupListId;


    public TodoDTO() {
    }

    public TodoDTO(Long id, boolean completed, String name, String groupListId) {
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

    public String getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(String groupListId) {
        this.groupListId = groupListId;
    }
}
