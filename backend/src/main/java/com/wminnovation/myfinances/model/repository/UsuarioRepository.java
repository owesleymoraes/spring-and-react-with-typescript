package com.wminnovation.myfinances.model.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wminnovation.myfinances.model.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	// Optional<Usuario> findByEmail(String email);

	boolean existsByEmail(String email);

	Optional<Usuario> findByEmail(String email);

}
