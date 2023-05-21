package com.wminnovation.myfinances.api.resource;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.wminnovation.myfinances.service.TokenService;
import com.wminnovation.myfinances.api.dto.UsuarioDTO;
import com.wminnovation.myfinances.model.entity.Usuario;
import com.wminnovation.myfinances.service.UsuarioService;
import com.wminnovation.myfinances.service.LancamentoService;

import lombok.RequiredArgsConstructor;

import com.wminnovation.myfinances.exception.ErroDeAutenticacao;
import com.wminnovation.myfinances.exception.RegraNegocioException;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioResource {

	private final UsuarioService service;
	private final LancamentoService lancamentoService;

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private TokenService tokenService;

	@PostMapping("/autenticar")
	public ResponseEntity<String> autenticarUsuario(@RequestBody UsuarioDTO dto) {
		try {
			UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
					dto.getEmail(), dto.getSenha());
			Authentication authenticate = this.authenticationManager.authenticate(usernamePasswordAuthenticationToken);

			Usuario usuarioAutenticado = (Usuario) authenticate.getPrincipal();
			 String tokenDTO = tokenService.gerarToken(usuarioAutenticado);
			return ResponseEntity.ok(tokenDTO);
			
		} catch (ErroDeAutenticacao e) {
		
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}

	@PostMapping
	public ResponseEntity<?> salvarUsuario(@RequestBody UsuarioDTO dto) {
		Usuario usuario = Usuario.builder().nome(dto.getNome()).email(dto.getEmail()).senha(dto.getSenha()).build();

		try {
			Usuario usuarioSalvo = service.salvarUsuario(usuario);
			return new ResponseEntity<>(usuarioSalvo, HttpStatus.CREATED);
		} catch (RegraNegocioException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}

	@GetMapping("{id}/saldo")
	public ResponseEntity obterSaldo(@PathVariable("id") Long id) {
		Optional<Usuario> usuario = service.obterUsuarioPorId(id);

		if (!usuario.isPresent()) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}

		BigDecimal saldo = lancamentoService.obterSaldoPorUsuario(id);
		return ResponseEntity.ok(saldo);

	}

}
