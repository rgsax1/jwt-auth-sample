package rodrigo.salles.backend_spring.dtos;

public record SignUpDto (String firstName, String lastName, String login, char[] password) { }
