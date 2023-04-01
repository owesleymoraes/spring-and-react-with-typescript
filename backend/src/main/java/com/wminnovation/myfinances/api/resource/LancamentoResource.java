package com.wminnovation.myfinances.api.resource;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wminnovation.myfinances.api.dto.LancamentoDTO;
import com.wminnovation.myfinances.exception.RegraNegocioException;
import com.wminnovation.myfinances.model.entity.Lancamento;
import com.wminnovation.myfinances.model.entity.Usuario;
import com.wminnovation.myfinances.model.enuns.StatusLancamento;
import com.wminnovation.myfinances.model.enuns.TipoLancamento;
import com.wminnovation.myfinances.service.LancamentoService;
import com.wminnovation.myfinances.service.UsuarioService;

@RestController
@RequestMapping("/api/lancamentos")
public class LancamentoResource {
	private LancamentoService service;
	private UsuarioService usuarioService;

	private Lancamento convertDTOToEntity(LancamentoDTO dtoToConvert) {
		Lancamento lancamentoEntity = new Lancamento();
		lancamentoEntity.setId(dtoToConvert.getId());
		lancamentoEntity.setDescricao(dtoToConvert.getDescricao());
		lancamentoEntity.setAno(dtoToConvert.getAno());
		lancamentoEntity.setMes(dtoToConvert.getMes());
		lancamentoEntity.setValor(dtoToConvert.getValor());

		Usuario usuario = usuarioService.obterUsuarioPorId(dtoToConvert.getUsuario())
				.orElseThrow(() -> new RegraNegocioException("Usuário não encontrado para o Id iformado."));

		lancamentoEntity.setUsuario(usuario);
		lancamentoEntity.setTipo(TipoLancamento.valueOf(dtoToConvert.getTipo()));
		lancamentoEntity.setStatus(StatusLancamento.valueOf(dtoToConvert.getStatus()));

		return lancamentoEntity;

	}

	public LancamentoResource(LancamentoService service) {
		this.service = service;
	}

	public ResponseEntity salvarLancamento(@RequestBody LancamentoDTO dtoLancamento) {
		try {
			Lancamento lancamentoEntity = convertDTOToEntity(dtoLancamento);
			lancamentoEntity = service.salvarLancamento(lancamentoEntity);
			return ResponseEntity.ok(lancamentoEntity);
		} catch (RegraNegocioException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

}
