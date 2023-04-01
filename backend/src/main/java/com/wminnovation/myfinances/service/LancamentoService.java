package com.wminnovation.myfinances.service;

import java.util.List;

import com.wminnovation.myfinances.model.entity.Lancamento;
import com.wminnovation.myfinances.model.enuns.StatusLancamento;

public interface LancamentoService {

	void validarLancamento(Lancamento lancamento);

	void deletarLancamento(Lancamento lancamento);

	Lancamento salvarLancamento(Lancamento lancamento);

	Lancamento atualizarLancamento(Lancamento lancamento);

	List<Lancamento> buscarLancamento(Lancamento lancamentoFiltrado);

	void atualizaStatusLancemento(Lancamento lancamneto, StatusLancamento status);

}
