import Sequelize, { Model } from 'sequelize';

class Situacao extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          field: 'cod_situacao',
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'nome',
        },
      },
      {
        sequelize,
        tableName: 'situacao',
        freezeTableName: false,
        timestamps: false,
      }
    );
    return this;
  }
}

export default Situacao;
