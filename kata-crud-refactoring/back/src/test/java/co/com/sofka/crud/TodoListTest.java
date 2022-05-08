package co.com.sofka.crud;
import co.com.sofka.crud.DTO.TodoListDTO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * @version 1.0
 * @author Duvan Botero
 *
 */

public class TodoListTest extends TodoListDTO {

    @Test
        void testGetId() {
            Long id = 1L;
            Assertions.assertEquals(1, 1);
        }

        @Test
        void testGetName() {
            String name = "java";
            Assertions.assertEquals("java", "java");

        }

    }

