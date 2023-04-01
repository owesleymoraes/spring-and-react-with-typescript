package com.wminnovation.myfinances.service;

import java.util.Optional;

import com.wminnovation.myfinances.model.entity.Usuario;

public interface UsuarioService {

	void validarEmail(String email);

	Optional<Usuario> obterUsuarioPorIp(Long id);

	Usuario salvarUsuario(Usuario usuario);

	Usuario autenticar(String email, String senha);

}
