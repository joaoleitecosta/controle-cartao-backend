import Sequelize, { Model } from 'sequelize';

class PerfilUsuario extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          field: 'cod_perfil_usuario',
        },
        nome: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        tableName: 'perfil_usuario',
        freezeTableName: true,
        timestamps: false,
      }
    );
    return this;
  }
}

export default PerfilUsuario;
