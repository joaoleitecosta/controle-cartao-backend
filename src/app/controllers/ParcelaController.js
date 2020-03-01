import { lastDayOfMonth, setMonth } from 'date-fns';
import { Op } from 'sequelize';

import Parcela from '../models/Parcela';
import Divida from '../models/Divida';
import Pessoa from '../models/Pessoa';
import Situacao from '../models/Situacao';

class ParcelaController {
  async index(req, res) {
    const {
      idSituacao = [1, 2],
      idPessoa = 1,
      idCartao = 0,
      dataVencimentoInicio = new Date('2000-01-01'),
      dataFinalVencimento = lastDayOfMonth(setMonth(new Date(), 15)),
    } = req.query;

    const parcela = await Parcela.findAll({
      where: {
        fk_cod_situacao: idSituacao,
        data: {
          [Op.between]: [dataVencimentoInicio, dataFinalVencimento],
        },
      },
      attributes: ['id', 'dataVencimento', 'numero', 'valor'],
      include: [
        {
          model: Divida,
          as: 'divida',
          where: {
            fk_cod_pessoa: idPessoa,
          },

          attributes: ['id', 'local', 'descricao', 'quantidadeParcela'],
          include: [
            {
              model: Pessoa,
              as: 'pessoa',
              attributes: ['id', 'nome'],
            },
          ],
        },
        {
          model: Situacao,
          as: 'situacao',
          attributes: ['id', 'nome'],
        },
      ],
    });

    return res.json(parcela);
  }
}

export default new ParcelaController();
