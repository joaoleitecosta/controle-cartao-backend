import Sequelize, { Model } from 'sequelize';

class Parcela extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          field: 'cod_parcela',
        },
        dataVencimento: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'data',
        },
        numero: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        valor: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        valorPago: {
          type: Sequelize.DOUBLE,
          field: 'valor_pago',
        },
      },
      {
        sequelize,
        tableName: 'parcela',
        freezeTableName: false,
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Divida, {
      foreignKey: 'fk_cod_divida',
      as: 'divida',
    });
    this.belongsTo(models.Situacao, {
      foreignKey: 'fk_cod_situacao',
      as: 'situacao',
    });
  }
}

export default Parcela;
