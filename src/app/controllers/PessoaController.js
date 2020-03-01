import Pessoa from '../models/Pessoa';

class PessoaController {
  async index(req, res) {
    const pessoa = await Pessoa.findAll();

    return res.json(pessoa);
  }
}

export default new PessoaController();
