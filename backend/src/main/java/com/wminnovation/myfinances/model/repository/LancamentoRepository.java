package com.wminnovation.myfinances.model.repository;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wminnovation.myfinances.model.entity.Lancamento;
import com.wminnovation.myfinances.model.enuns.TipoLancamento;

@Repository
public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {

	@Query(value = " select sum(l.valor) from Lancamento l join l.usuario u"
			+ " where u.id = :idUsuario and l.tipo =:tipo group by u ")
	BigDecimal obterSaldoPotTipoDeLancamento(@Param("idUsuario") Long idUsuario, @Param("tipo") TipoLancamento tipo);

}
