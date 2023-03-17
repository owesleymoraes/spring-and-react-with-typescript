package com.wminnovation.myfinances.service;

import com.wminnovation.myfinances.model.entity.Usuario;

public interface UsuarioService {

	Usuario autenticar(String email, String senha);

	Usuario salvarUsuario(Usuario usuario);

	void validarEmail(String email);

}
