package com.wminnovation.myfinances.config;

import org.springframework.http.HttpMethod;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.wminnovation.myfinances.service.FilterToken;

import jakarta.servlet.Filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

	@Autowired
	private FilterToken filter;

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();

	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		return http.csrf().disable().authorizeHttpRequests().and().authorizeHttpRequests()
				.requestMatchers(HttpMethod.POST, "/api/usuarios/autenticar").permitAll()
				.requestMatchers(HttpMethod.POST, "/api/usuarios").permitAll()
				.anyRequest().authenticated()
				.and()
				.sessionManagement().sessionCreationPolicy((SessionCreationPolicy.STATELESS))
				.and()
				.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class).build();
	}
	
	@Bean
	public FilterRegistrationBean<CorsFilter> corsFiler() {
		List<String> all = Arrays.asList("*");
		 CorsConfiguration corsConfiguration = new  CorsConfiguration();
		 corsConfiguration.setAllowedMethods(all);
		 corsConfiguration.setAllowedOriginPatterns(all);
		 corsConfiguration.setAllowedHeaders(all);
		 corsConfiguration.setAllowCredentials(true);
		 
		 UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		 source.registerCorsConfiguration("/**", corsConfiguration);
		 
		 CorsFilter corsFilter = new CorsFilter(source);
		  FilterRegistrationBean<CorsFilter> filterRegistrationBean = new FilterRegistrationBean<CorsFilter>(corsFilter);
		  filterRegistrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE);
		  
		  return filterRegistrationBean;
		  
		  
		 
	}

}
