package com.wminnovation.myfinances.model.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.wminnovation.myfinances.model.entity.Usuario;

@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UsuarioRepositoryTest {

	@Autowired
	UsuarioRepository repository;

	@Autowired
	TestEntityManager entityManager;

	public static Usuario criaUsuario() {
		return Usuario.builder().nome("usuario").email("usuario@email.com").build();
	}

	@Test
	public void deveVerificarAExistenciaDeUmEmail() {
		// cenário
		Usuario usuario = criaUsuario();
		entityManager.persist(usuario);

		// ação ou execução - aplicando o teste
		boolean result = repository.existsByEmail("usuario@email.com");

		// verificação
		assertTrue(result);

	}

	@Test
	public void deveRetornarFalsoQuandoNãoHouverCadastroComEmailPassado() {
		// cenério

		// repository.deleteAll();

		// ação

		boolean result = repository.existsByEmail("usuario@email.com");

		// verificação

		assertFalse(result);
	}

	@Test
	public void devePersistirUmUsuarioBaseDeDados() {
		// cenario

		Usuario usuario = criaUsuario();

		// ação

		Usuario usuarioSalvo = repository.save(usuario);

		// verificação

		assertThat(usuarioSalvo.getId()).isNotNull();
	}

	@Test
	public void deveBuscarUsuarioPorEmail() {
		// cenário:
		Usuario usuario = criaUsuario();

		// Ação:
		entityManager.persist(usuario);

		// verificação:
		Optional<Usuario> userWithThisEmail = repository.findByEmail("usuario@email.com");

		assertThat(userWithThisEmail.isPresent()).isTrue();
	}
}
