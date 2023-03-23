package com.wminnovation.myfinances.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wminnovation.myfinances.model.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	// Optional<Usuario> findByEmail(String email);
	boolean existByEmail(String email);

}
