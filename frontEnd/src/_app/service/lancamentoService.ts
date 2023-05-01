import { FormValuesParams } from "../../views/lancamentos/CadastroLancamento";
import { ApiService } from "../apiservice";

export interface lancamentos {
  ano: number;
  mes: number;
  tipo: string;
  status?: string;
  usuarioId: number;
  releaseId?: number;
  descricao?: string;
}

export class LancamentoService extends ApiService {
  constructor() {
    super("/api/lancamentos");
  }

  salvarLancamento(lancamentos: FormValuesParams) {
    return this.post("", lancamentos);
  }

  consultaLancamento(lancamentos: lancamentos) {
    let params = `?ano=${lancamentos.ano}`;

    if (lancamentos.mes) {
      params = `${params}&mes=${lancamentos.mes}`;
    }

    if (lancamentos.tipo) {
      params = `${params}&tipo=${lancamentos.tipo}`;
    }

    if (lancamentos.status) {
      params = `${params}&status=${lancamentos.status}`;
    }

    if (lancamentos.usuarioId) {
      params = `${params}&usuario=${lancamentos.usuarioId}`;
    }

    if (lancamentos.descricao) {
      params = `${params}&descricao=${lancamentos.descricao}`;
    }

    return this.get(params);
  }

  deletaLancamento(id: number) {
    return this.delete(`/${id}`);
  }
}
