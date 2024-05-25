package rodrigo.salles.backend_spring.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import rodrigo.salles.backend_spring.dtos.SignUpDto;
import rodrigo.salles.backend_spring.dtos.UserDto;
import rodrigo.salles.backend_spring.entities.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
