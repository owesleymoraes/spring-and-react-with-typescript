package com.wminnovation.myfinances.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wminnovation.myfinances.model.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}