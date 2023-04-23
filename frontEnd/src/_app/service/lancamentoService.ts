import { ApiService } from "../apiservice";

export interface lancamentos {
  ano: number;
  mes: number;
  tipo: string;
  status?: string;
  descricao?: string;
  usuarioId: number;
}

export class LancamentoService extends ApiService {
  constructor() {
    super("/api/lancamentos");
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
}
