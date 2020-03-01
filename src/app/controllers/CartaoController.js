import Cartao from '../models/Cartao';

class CartaoController {
  /**
   * @route GET /cartoes
   * @group Cartão - Operations about user
   * @returns {object} 200 - An array of card info
   * @returns {Error}  default - Unexpected error
   */
  async index(req, res) {
    const cartao = await Cartao.findAll();

    return res.json(cartao);
  }
}

export default new CartaoController();
