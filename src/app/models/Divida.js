import Sequelize, { Model } from 'sequelize';

class Divida extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          field: 'cod_divida',
        },
        local: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dataCompra: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'data_compra',
        },
        dataInicioPagamento: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'data_inicio_pagamento',
        },
        quantidadeParcela: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'quant_parcela',
        },
        valorTotal: {
          type: Sequelize.DOUBLE,
          allowNull: false,
          field: 'valor_total',
        },
        dataCadastro: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'data_cadastro',
        },
      },
      {
        sequelize,
        tableName: 'divida',
        freezeTableName: false,
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoa, {
      foreignKey: 'fk_cod_pessoa',
      as: 'pessoa',
    });
    this.belongsTo(models.Cartao, {
      foreignKey: 'fk_cod_cartao',
      as: 'cartao',
    });
  }
}

export default Divida;
