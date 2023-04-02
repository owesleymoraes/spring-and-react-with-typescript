package com.wminnovation.myfinances.api.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

	@PostMapping
	public ResponseEntity salvarLancamento(@RequestBody LancamentoDTO dtoLancamento) {
		try {
			Lancamento lancamentoEntity = convertDTOToEntity(dtoLancamento);
			lancamentoEntity = service.salvarLancamento(lancamentoEntity);
			return new ResponseEntity(lancamentoEntity, HttpStatus.CREATED);
		} catch (RegraNegocioException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@PutMapping({ "id" })
	public ResponseEntity atualizarLancamento(@PathVariable("id") Long id, @RequestBody LancamentoDTO dto) {
		// primeiro buscar na base dados o id informado.

		return service.ObterLancamentoPeloId(id).map(item -> {
			try {
				Lancamento lancamento = convertDTOToEntity(dto);
				lancamento.setId(item.getId());
				service.atualizarLancamento(lancamento);
				return ResponseEntity.ok(lancamento);

			} catch (RegraNegocioException e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}).orElseGet(() -> new ResponseEntity<String>("Lançamento não encontrado na base de dados.",
				HttpStatus.BAD_REQUEST));

	}

}
