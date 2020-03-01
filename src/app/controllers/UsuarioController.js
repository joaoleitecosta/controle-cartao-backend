import Usuario from '../models/Usuario';
import Pessoa from '../models/Pessoa';
import PerfilUsuario from '../models/PerfilUsuario';

class UsuarioController {
  async index(req, res) {
    const usuario = await Usuario.findAll({
      attributes: ['id', 'ativo', 'nome'],
      include: [
        {
          model: Pessoa,
          as: 'pessoa',
          attributes: ['id', 'nome'],
        },
        {
          model: PerfilUsuario,
          as: 'perfil',
          attributes: ['id', 'nome'],
        },
      ],
    });
    return res.json(usuario);
  }
}

export default new UsuarioController();
