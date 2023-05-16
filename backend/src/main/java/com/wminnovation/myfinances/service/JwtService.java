package com.wminnovation.myfinances.service;

import com.wminnovation.myfinances.model.entity.Usuario;

public interface JwtService {
	String gerarToken(Usuario usuario);

}
