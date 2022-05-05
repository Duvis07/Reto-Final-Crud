package co.com.sofka.crud.DTO;

public class TodoListDTO {
    private Long id;
    private String name;


    public TodoListDTO() {
    }

    public TodoListDTO(Long id, String name) {
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