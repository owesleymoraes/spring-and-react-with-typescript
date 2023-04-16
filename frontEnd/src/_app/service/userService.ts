import { ApiService } from "../apiservice";

export class UsuarioService extends ApiService {
  constructor() {
    super("/api/usuarios");
  }

  autenticar(payload: {}) {
    return this.post("/autenticar", payload);
  }

  obterSaldoPorUsuario(id: number) {
    return this.get(`/${id}/saldo`);
  }

  salvar(payload: {}) {
    return this.post("", payload);
  }
}
