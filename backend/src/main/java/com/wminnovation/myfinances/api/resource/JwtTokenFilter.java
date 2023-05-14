package com.wminnovation.myfinances.api.resource;

import java.io.IOException;

import org.springframework.web.filter.OncePerRequestFilter;

import com.wminnovation.myfinances.service.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtTokenFilter extends OncePerRequestFilter {

	private JwtService jwtService;

	public JwtTokenFilter(JwtService jwtService) {
		this.jwtService = jwtService;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String authorization = request.getHeader("Authorization");

		if (authorization != null && authorization.startsWith("Bearer")) {
			
			String token = authorization.split(" ")[1];
			
			boolean isTokenValid = jwtService.isTokenValido(token);
			

		}

	}

}
