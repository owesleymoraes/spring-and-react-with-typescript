package com.wminnovation.myfinances.service;

import com.wminnovation.myfinances.model.entity.Usuario;

public interface TokenService {
	String gerarToken(Usuario usuario);

}
