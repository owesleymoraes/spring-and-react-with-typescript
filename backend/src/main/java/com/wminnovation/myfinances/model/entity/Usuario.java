package com.wminnovation.myfinances.model.entity;

import lombok.Data;
import lombok.ToString;
import jakarta.persistence.Id;
import lombok.EqualsAndHashCode;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
@Table(name = "usuario", schema = "financas")
@Data
@EqualsAndHashCode
@ToString
public class Usuario {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "nome")
	private String nome;

	@Column(name = "email")
	private String email;

	@Column(name = "senha")
	private String senha;

}
