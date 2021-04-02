import Router from "koa-router";
import * as hero from "./hero/routes";

export const createRouter = () : Router => {
  const router = new Router();

  router.post('/heroes/create', hero.createCtrl);
  router.get('/heroes/:id', hero.getCtrl);
  router.delete('/heroes/:id', hero.destroyCtrl);
  router.get('/heroes', hero.listCtrl);

  return router;
}
