package com.wminnovation.myfinances.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.beans.factory.annotation.Autowired;

import com.wminnovation.myfinances.service.SecurityUserDetailsService;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
	
	@Autowired
	private SecurityUserDetailsService userDetailService;


	@Autowired
	    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		 auth
			.userDetailsService(userDetailService)
			.passwordEncoder(passwordEncoder());
	    }
	
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}


	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		return http.csrf().disable().authorizeHttpRequests()
				.requestMatchers(HttpMethod.POST, "/api/usuarios/autenticar")
				.permitAll()
				.requestMatchers(HttpMethod.POST, "/api/usuarios")
				.permitAll()
				.anyRequest()
				.authenticated()
				.and()
				.sessionManagement().sessionCreationPolicy((SessionCreationPolicy.STATELESS))
				.and()
				.httpBasic()
				.and()
				.build();
	}

}
