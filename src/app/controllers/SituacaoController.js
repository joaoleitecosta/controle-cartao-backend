import Situacao from '../models/Situacao';

class SituacaoController {
  async index(req, res) {
    const situacao = await Situacao.findAll();

    return res.json(situacao);
  }
}

export default new SituacaoController();
