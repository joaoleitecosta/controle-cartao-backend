import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          field: 'cod_pessoa',
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'nome',
        },
        ativa: {
          type: Sequelize.INTEGER,
          allowNull: true,
          field: 'ativa',
        },
      },
      {
        sequelize,
        tableName: 'pessoa',
        freezeTableName: true,
      }
    );
    return this;
  }
}

export default Pessoa;
