package com.wminnovation.myfinances.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wminnovation.myfinances.exception.RegraNegocioException;
import com.wminnovation.myfinances.model.entity.Usuario;
import com.wminnovation.myfinances.model.repository.UsuarioRepository;
import com.wminnovation.myfinances.service.UsuarioService;

import jakarta.transaction.Transactional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository repository;

	public UsuarioServiceImpl(UsuarioRepository repository) {
		super();
		this.repository = repository;
	}

	@Override
	public Usuario autenticar(String email, String senha) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public Usuario salvarUsuario(Usuario usuario) {
		validarEmail(usuario.getEmail());
		return repository.save(usuario);
	}

	@Override
	public void validarEmail(String email) {
		boolean existeEsseEmail = repository.existsByEmail(email);
		if (existeEsseEmail) {
			throw new RegraNegocioException("Já existe um usuário com esse email.");
		}

	}

}
