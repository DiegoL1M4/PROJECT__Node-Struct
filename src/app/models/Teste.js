import Sequelize, { Model } from 'sequelize';

class Teste extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        conditional: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default Teste;
