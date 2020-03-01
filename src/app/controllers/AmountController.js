import { Op } from 'sequelize';
import { lastDayOfMonth, setMonth } from 'date-fns';

import Parcela from '../models/Parcela';
import Divida from '../models/Divida';

class AmountController {
  async index(req, res) {
    const {
      situacao = 1,
      idPessoa = 1,
      dataVencimentoInicio = new Date('0001-01-01'),
      dataFinalVencimento = lastDayOfMonth(setMonth(new Date(), 360)),
    } = req.query;

    const parcelas = await Parcela.findAll({
      where: {
        fk_cod_situacao: situacao,
        data: {
          [Op.between]: [dataVencimentoInicio, dataFinalVencimento],
        },
      },
      attributes: ['id', 'valor'],
      // attributes: [[fn('sum', col('valor')), 'valor']],
      // group: ['Parcela.cod_parcela'],
      // ram: true,
      include: [
        {
          model: Divida,
          as: 'divida',
          where: {
            fk_cod_pessoa: idPessoa,
          },
        },
      ],
    });
    const total = parcelas.reduce((soma, parcela) => {
      return soma + parseFloat(parcela.valor);
    }, 0);

    return res.json(total);
  }
}

export default new AmountController();
