import { Router } from 'express';

import Teste from './app/models/Teste';

const routes = new Router();

routes.get('/', async (req, res) => {
  const teste = await Teste.create({
    name: 'Teste 5',
    email: 'teste5@teste.com',
    password_hash: 'teste',
    conditional: true,
  });

  return res.json(teste);
});

export default routes;
