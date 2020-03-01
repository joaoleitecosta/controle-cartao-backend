import Sequelize, { Model } from 'sequelize';

/**
 * @typedef Card
 * @property {integer} id
 * @property {string} name.required - Some description for product
 * @property {string} bank.required
 * @property {integer} active.required
 * @property {double} limit
 * @property {integer} expiration_day
 * @property {integer} best_buy_day
 */
class Cartao extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          field: 'cod_cartao',
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'nome',
        },
        banco: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'banco',
        },
        ativo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'ativo',
        },
        limite: {
          type: Sequelize.DOUBLE,
          field: 'limite',
        },
        diaVencimento: {
          type: Sequelize.INTEGER,
          field: 'dia_vencimento',
        },
        melhorDiaCompra: {
          type: Sequelize.INTEGER,
          field: 'melhor_dia_compra',
        },
      },
      {
        sequelize,
        tableName: 'cartao',
        freezeTableName: false,
        timestamps: false,
      }
    );
    return this;
  }
}

export default Cartao;
