package com.wminnovation.myfinances.service.impl;

import java.util.Date;
import java.time.ZoneId;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import com.wminnovation.myfinances.service.JwtService;
import com.wminnovation.myfinances.model.entity.Usuario;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.ExpiredJwtException;


@Service
public class JwtServiceImpl implements JwtService {

	
	@Value("${jwt.expiracao}")
	private String expriracaoToken;
	
	
	@Value("${jwt.chave-assinatura}")
	private String chaveAssinatura;

	@Override
	public String gerarToken(Usuario usuario) {
		long exp = Long.valueOf(expriracaoToken);
		LocalDateTime dataHoraExpirada = LocalDateTime.now().plusMinutes(exp);
		Instant instante = dataHoraExpirada.atZone(ZoneId.systemDefault()).toInstant();
		Date data = Date.from(instante);
		
		 String horaExpiracaoToken= dataHoraExpirada.toLocalTime()
				 .format(DateTimeFormatter.ofPattern("HH:mm"));
		
		String token = Jwts
							.builder()
							.setExpiration(data)
							.setSubject(usuario.getEmail())
							.claim("nome", usuario.getNome())
							.claim("horaExpiracao", horaExpiracaoToken)
							.signWith(SignatureAlgorithm.HS512, chaveAssinatura)
							.compact();
		return token;
	}
	
	//Claims- São informações geradas no token

	@Override
	public Claims obterClaims(String token) throws ExpiredJwtException {
		
		return Jwts
				.parser()
				.setSigningKey(chaveAssinatura)
				.parseClaimsJws(token)
				.getBody();
	}

	@Override
	public boolean isTokenValido(String token) {
		try {
			
			Claims claims = obterClaims(token);
			Date estaDataEstaExpirada = claims.getExpiration();
			LocalDateTime dataExpiracao = estaDataEstaExpirada.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
			
			return !LocalDateTime.now().isAfter(dataExpiracao);
			
		} catch ( ExpiredJwtException e) {
			return false;
		}
		
	}

	@Override
	public String obterLoginUsuario(String token) {
		Claims claims = obterClaims(token);
		return claims.getSubject();
	}

}
