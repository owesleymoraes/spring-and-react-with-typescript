package com.wminnovation.myfinances.service;

import org.springframework.stereotype.Component;

import com.wminnovation.myfinances.model.entity.Usuario;

@Component
public interface UsuarioService {

	Usuario autenticar(String email, String senha);

	Usuario salvarUsuario(Usuario usuario);

	void validarEmail(String email);

}
