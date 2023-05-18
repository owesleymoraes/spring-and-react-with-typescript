package com.wminnovation.myfinances.config;

import org.springframework.http.HttpMethod;
import org.springframework.context.annotation.Bean;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;



@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
	
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationManager authenticationManager (AuthenticationConfiguration authenticationConfiguration) throws Exception  {
		return authenticationConfiguration.getAuthenticationManager();
		
	}


	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		return http.csrf().disable().authorizeHttpRequests()
				.and()
				.authorizeHttpRequests()
				.requestMatchers(HttpMethod.POST, "/api/usuarios/autenticar")
				.permitAll()
				.requestMatchers(HttpMethod.POST, "/api/usuarios")
				.permitAll()
				.anyRequest().authenticated()
				.and()
				.sessionManagement().sessionCreationPolicy((SessionCreationPolicy.STATELESS))
				.and()
				.build();
	}

}
