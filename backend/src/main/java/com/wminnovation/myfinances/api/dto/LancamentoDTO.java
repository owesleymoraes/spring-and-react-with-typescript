package com.wminnovation.myfinances.api.dto;

import java.time.LocalDate;
import java.math.BigDecimal;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LancamentoDTO {
	private Long id;

	private String descricao;

	private Integer mes;

	private Integer ano;

	private Long usuario;

	private BigDecimal valor;

	private LocalDate dataCadastro;

	private String tipo;

	private String status;

}
