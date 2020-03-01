import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pessoa from '../app/models/Pessoa';
import Cartao from '../app/models/Cartao';
import Situacao from '../app/models/Situacao';
import Divida from '../app/models/Divida';
import Parcela from '../app/models/Parcela';
import Usuario from '../app/models/Usuario';
import PerfilUsuario from '../app/models/PerfilUsuario';

const models = [
  Usuario,
  Pessoa,
  Cartao,
  Situacao,
  Divida,
  Parcela,
  PerfilUsuario,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
