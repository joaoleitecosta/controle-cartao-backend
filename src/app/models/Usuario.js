import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          field: 'cod_usuario',
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'nome',
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'senha',
        },
        ativo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'ativo',
        },
      },
      {
        sequelize,
        freezeTableName: false,
        tableName: 'usuario',
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

    this.belongsTo(models.PerfilUsuario, {
      foreignKey: 'fk_cod_perfil_usuario',
      as: 'perfil',
    });
  }
}

export default Usuario;
