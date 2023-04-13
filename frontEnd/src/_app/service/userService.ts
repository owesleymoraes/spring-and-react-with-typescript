import { ApiService } from "../apiservice";

export class UsuarioService extends ApiService {
  constructor() {
    super("/api/usuarios");
  }

  autenticar(credenciais: {}) {
    return this.post('/autenticar', credenciais)

  }
}
