import SessionController from '../controllers/SessionController';

const path = '/session';

class AuthRestEndPoint {
  static init(routes) {
    routes.post(`${path}/`, SessionController.store);
  }
}

export default AuthRestEndPoint;
