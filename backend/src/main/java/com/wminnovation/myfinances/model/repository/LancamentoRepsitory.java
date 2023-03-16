package com.wminnovation.myfinances.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wminnovation.myfinances.model.entity.Lancamento;

public interface LancamentoRepsitory extends JpaRepository<Lancamento, Long> {

}
