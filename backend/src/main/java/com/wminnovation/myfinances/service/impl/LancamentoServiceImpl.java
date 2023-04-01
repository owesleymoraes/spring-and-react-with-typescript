package com.wminnovation.myfinances.service.impl;

import java.util.List;
import java.util.Objects;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;

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
	@Transactional(readOnly = true)
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

}
