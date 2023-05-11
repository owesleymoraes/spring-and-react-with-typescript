package com.wminnovation.myfinances.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wminnovation.myfinances.exception.ErroDeAutenticacao;
import com.wminnovation.myfinances.exception.RegraNegocioException;
import com.wminnovation.myfinances.model.entity.Usuario;
import com.wminnovation.myfinances.model.repository.UsuarioRepository;
import com.wminnovation.myfinances.service.UsuarioService;

import jakarta.transaction.Transactional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	private PasswordEncoder encoder;

	public UsuarioServiceImpl(UsuarioRepository repository, PasswordEncoder encoder) {
		super();
		this.repository = repository;
		this.encoder = encoder;
	}

	private void criptofarSenha(Usuario usuario) {
		String senha = usuario.getSenha();
		String senhaCripto = encoder.encode(senha);
		usuario.setSenha(senhaCripto);
	}

	@Override
	public Usuario autenticar(String email, String senha) {
		Optional<Usuario> usuario = repository.findByEmail(email);

		// retornando um booelan de verificação de exitência
		if (!usuario.isPresent()) {
			throw new ErroDeAutenticacao("Email do usuário não encontrado");
		}
		
		 boolean passwordEquals = encoder.matches(senha, usuario.get().getSenha());

		// .get irá retornar o objeto que vem após a autenticação
		if (!passwordEquals) {
			throw new ErroDeAutenticacao("Senha incorreta!");
		}

		return usuario.get();
	}

	@Override
	@Transactional
	public Usuario salvarUsuario(Usuario usuario) {
		validarEmail(usuario.getEmail());
		criptofarSenha(usuario);
		return repository.save(usuario);
	}

	@Override
	public void validarEmail(String email) {
		boolean existeEsseEmail = repository.existsByEmail(email);
		if (existeEsseEmail) {
			throw new RegraNegocioException("Já existe um usuário com esse email.");
		}

	}

	@Override
	public Optional<Usuario> obterUsuarioPorId(Long id) {

		return repository.findById(id);
	}

}
