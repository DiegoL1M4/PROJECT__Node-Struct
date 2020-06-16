import Sequelize from 'sequelize';
import databaseConfig from '../../config/database';

import Teste from '../app/models/Teste';

const models = [Teste];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
