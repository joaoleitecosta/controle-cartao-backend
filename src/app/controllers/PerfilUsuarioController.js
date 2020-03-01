import PerfilUsuario from '../models/PerfilUsuario';

class PerfilUsuarioController {
  async index(req, res) {
    const perfilUsuario = await PerfilUsuario.findAll();

    return res.json(perfilUsuario);
  }
}

export default new PerfilUsuarioController();
