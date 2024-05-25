package rodrigo.salles.backend_spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rodrigo.salles.backend_spring.entities.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);
}
