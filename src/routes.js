import { Router } from 'express';

import AuthRestEndPoint from './app/routes/AuthRestEndPoint';
import UserRestEndPoint from './app/routes/UserRestEndPoint';

import Auth from './app/middlewares/auth';

const rests = [AuthRestEndPoint, UserRestEndPoint];
const routes = new Router();

rests.forEach((rest) => {
  rest.init(routes, Auth);
});

export default routes;
