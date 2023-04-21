import { ApiService } from "../apiservice";

interface lancamentos {
  ano: number;
  mes: number;
  tipo: string;
  status: string;
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
      params = `${params}&mes=${lancamentos.tipo}`;
    }

    if (lancamentos.status) {
      params = `${params}&mes=${lancamentos.status}`;
    }

    return this.get(params);
  }
}
