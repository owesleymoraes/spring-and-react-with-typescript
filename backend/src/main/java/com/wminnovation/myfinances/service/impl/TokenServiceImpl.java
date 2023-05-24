package com.wminnovation.myfinances.service.impl;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;


import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.wminnovation.myfinances.model.entity.Usuario;
import com.wminnovation.myfinances.service.TokenService;

@Service
public class TokenServiceImpl implements TokenService {

	LocalDateTime now = LocalDateTime.now().plusMinutes(90);
	Instant expiresAt = now.atOffset(ZoneOffset.of("-03:00")).toInstant();

	@Override
	public String gerarToken(Usuario usuario) {
		try {
			return JWT.create().withIssuer("Produtos")
					.withSubject(usuario.getEmail())
					.withClaim("nome", usuario.getNome())
					.withExpiresAt(Date.from(expiresAt))
					.sign(Algorithm.HMAC256("secreta"));
			
		}  catch (JWTVerificationException ex) {
	        
	        throw new RuntimeException("Falha na geração  do token JWT: " + ex.getMessage(), ex);
	    }
		

	}
	

	@Override
	public String getSubject(String token) {
		try {

			return JWT.require(Algorithm.HMAC256("secreta"))
					.withIssuer("Produtos")
					.build().verify(token).getSubject();
			
		}  catch (JWTVerificationException ex) {
			
	        
	        throw new RuntimeException("Falha na verificação do token JWT: " + ex.getMessage(), ex);
	    }
		
		
	}

}
