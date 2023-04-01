package com.wminnovation.myfinances.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wminnovation.myfinances.model.entity.Lancamento;
import com.wminnovation.myfinances.model.enuns.StatusLancamento;
import com.wminnovation.myfinances.model.repository.LancamentoRepository;
import com.wminnovation.myfinances.service.LancamentoService;

import jakarta.transaction.Transactional;

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
	public List<Lancamento> buscarLancamento(Lancamento lancamentoFiltrado) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public void atualizaStatusLancemento(Lancamento lancamneto, StatusLancamento status) {
		lancamneto.setStatus(status);
		atualizarLancamento(lancamneto);

	}

}
