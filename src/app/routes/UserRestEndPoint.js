import UserController from '../controllers/UserController';

const path = '/user';

class UserRestEndPoint {
  static init(routes, Auth) {
    routes.post(`${path}/`, UserController.store);
    routes.put(`${path}/`, Auth, UserController.update);
  }
}

export default UserRestEndPoint;
