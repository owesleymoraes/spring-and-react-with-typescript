package com.wminnovation.myfinances.service;
import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.wminnovation.myfinances.model.entity.Usuario;
import com.wminnovation.myfinances.model.repository.UsuarioRepository;
import com.wminnovation.myfinances.service.TokenService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class FilterToken extends OncePerRequestFilter {

	@Autowired
	private TokenService tokenService;
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String token;

		String authorizationHeader = request.getHeader("Authorization");

		if (authorizationHeader != null) {
			token = authorizationHeader.replace("Bearer", "");

			String subject = this.tokenService.getSubject(token);
			
			Optional<Usuario> usuario = usuarioRepository.findByEmail(subject);
			
			UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(usuario.get(),
					null, usuario.get().getAuthorities());
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
		}
		
		filterChain.doFilter(request, response);

	}

}
