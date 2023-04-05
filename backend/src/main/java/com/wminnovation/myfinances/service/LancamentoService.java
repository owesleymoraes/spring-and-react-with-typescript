package com.wminnovation.myfinances.service;

import java.util.List;
import java.util.Optional;

import com.wminnovation.myfinances.model.entity.Lancamento;
import com.wminnovation.myfinances.model.enuns.StatusLancamento;

public interface LancamentoService {

	void validarLancamento(Lancamento lancamento);

	void deletarLancamento(Lancamento lancamento);

	Lancamento salvarLancamento(Lancamento lancamento);

	Optional<Lancamento> obterLancamentoPeloId(Long id);

	Lancamento atualizarLancamento(Lancamento lancamento);

	List<Lancamento> buscarLancamento(Lancamento lancamentoFiltrado);

	void atualizaStatusLancemento(Lancamento lancamneto, StatusLancamento status);

}
