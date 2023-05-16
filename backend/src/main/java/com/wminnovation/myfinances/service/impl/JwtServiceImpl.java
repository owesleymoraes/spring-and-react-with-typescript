package com.wminnovation.myfinances.service.impl;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.wminnovation.myfinances.model.entity.Usuario;
import com.wminnovation.myfinances.service.JwtService;

@Service
public class JwtServiceImpl implements JwtService {

	LocalDateTime now = LocalDateTime.now().plusMinutes(10);
	Instant expiresAt = now.atOffset(ZoneOffset.of("-03:00")).toInstant();

	@Override
	public String gerarToken(Usuario usuario) {
		return JWT.create().withIssuer("Produtos").withSubject(usuario.getEmail()).withClaim("nome", usuario.getNome())
				.withExpiresAt(Date.from(expiresAt)).sign(Algorithm.HMAC256("secreta"));

		/**
		 * long exp = Long.valueOf(expriracaoToken); LocalDateTime dataHoraExpirada =
		 * LocalDateTime.now().plusMinutes(exp); Instant instante =
		 * dataHoraExpirada.atZone(ZoneId.systemDefault()).toInstant(); Date data =
		 * Date.from(instante);
		 * 
		 * String horaExpiracaoToken= dataHoraExpirada.toLocalTime()
		 * .format(DateTimeFormatter.ofPattern("HH:mm"));
		 * 
		 * String token = Jwts .builder() .setExpiration(data)
		 * .setSubject(usuario.getEmail()) .claim("nome", usuario.getNome())
		 * .claim("horaExpiracao", horaExpiracaoToken)
		 * .signWith(SignatureAlgorithm.HS512, chaveAssinatura) .compact(); return
		 * token;
		 * 
		 */

	}

}
