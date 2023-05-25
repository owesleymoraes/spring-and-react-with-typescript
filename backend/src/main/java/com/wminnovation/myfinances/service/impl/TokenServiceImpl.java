package com.wminnovation.myfinances.service.impl;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.wminnovation.myfinances.model.entity.Usuario;
import com.wminnovation.myfinances.service.TokenService;

@Service
public class TokenServiceImpl implements TokenService {

	LocalDateTime now = LocalDateTime.now().plusMinutes(180);
	Instant expiresAt = now.atOffset(ZoneOffset.of("-03:00")).toInstant();
	String horaExpiracaoToken = now.toLocalTime().format(DateTimeFormatter.ofPattern("HH:mm"));

	@Override
	public String gerarToken(Usuario usuario) {
		try {
			return JWT.create().withIssuer("Login").withSubject(usuario.getEmail())
					.withClaim("nome", usuario.getNome())
					.withClaim("horaExpiracaoToken", horaExpiracaoToken)
					.withClaim("userid", usuario.getId())
					.withExpiresAt(Date.from(expiresAt))
					.sign(Algorithm.HMAC256("secreta"));

		} catch (JWTVerificationException ex) {

			throw new RuntimeException("Falha na geração  do token JWT: " + ex.getMessage(), ex);
		}

	}

	@Override
	public String getSubject(String token) {
		try {

			return JWT.require(Algorithm.HMAC256("secreta")).withIssuer("Login").build().verify(token).getSubject();

		} catch (JWTVerificationException ex) {

			throw new RuntimeException("Falha na verificação do token JWT: " + ex.getMessage(), ex);
		}

	}

}
