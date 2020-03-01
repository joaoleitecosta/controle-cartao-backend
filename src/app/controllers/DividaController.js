import Divida from '../models/Divida';
import Pessoa from '../models/Pessoa';
import Cartao from '../models/Cartao';

class DividaController {
  async index(req, res) {
    const divida = await Divida.findAll({
      include: [
        {
          model: Pessoa,
          as: 'pessoa',
          attributes: ['nome']
        },
        {
          model: Cartao,
          as: 'cartao',
          attributes: ['nome']
        }
      ]
    });

    return res.json(divida);
  }
}

export default new DividaController();
