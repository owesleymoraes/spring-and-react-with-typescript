package com.wminnovation.myfinances.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;

import com.wminnovation.myfinances.exception.RegraNegocioException;
import com.wminnovation.myfinances.model.entity.Lancamento;
import com.wminnovation.myfinances.service.LancamentoService;
import com.wminnovation.myfinances.model.enuns.StatusLancamento;
import com.wminnovation.myfinances.model.repository.LancamentoRepository;

@Service
public class LancamentoServiceImpl implements LancamentoService {

	private LancamentoRepository repository;

	public LancamentoServiceImpl(LancamentoRepository repository) {
		this.repository = repository;

	}

	@Override
	@Transactional
	public Lancamento salvarLancamento(Lancamento lancamento) {

		return repository.save(lancamento);
	}

	@Override
	@Transactional
	public Lancamento atualizarLancamento(Lancamento lancamento) {
		Objects.requireNonNull(lancamento.getId());
		return repository.save(lancamento);
	}

	@Override
	@Transactional
	public void deletarLancamento(Lancamento lancamento) {
		Objects.requireNonNull(lancamento.getId());
		repository.delete(lancamento);

	}

	@Override
	@Transactional
	public List<Lancamento> buscarLancamento(Lancamento lancamentoFiltrado) {
		Example example = Example.of(lancamentoFiltrado,
				ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING));
		return repository.findAll(example);
	}

	@Override
	@Transactional
	public void atualizaStatusLancemento(Lancamento lancamneto, StatusLancamento status) {
		lancamneto.setStatus(status);
		atualizarLancamento(lancamneto);

	}

	@Override
	public void validarLancamento(Lancamento lancamento) {
		if (lancamento.getDescricao() == null || lancamento.getDescricao().trim().equals("")) {
			throw new RegraNegocioException("Informe uma Descrição válida");
		}

		if (lancamento.getMes() == null || lancamento.getMes() < 1 || lancamento.getMes() > 12) {
			throw new RegraNegocioException("Informe um Mês válido.");
		}

		if (lancamento.getAno() == null || lancamento.getAno().toString().length() != 4) {
			throw new RegraNegocioException("Informe um Ano válido.");
		}

		if (lancamento.getUsuario() == null || lancamento.getUsuario().getId() == null) {
			throw new RegraNegocioException("Informe um Usuário válido.");
		}

		if (lancamento.getValor() == null || lancamento.getValor().compareTo(BigDecimal.ZERO) < 1) {
			throw new RegraNegocioException("Informe um Valor válido.");
		}
		
		if (lancamento.getTipo() == null ) {
			throw new RegraNegocioException("Informe um Tipo de lançamento válido.");
		}
	}

}
