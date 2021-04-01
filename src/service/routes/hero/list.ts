import {Context} from "koa";
import {listHero} from "../../lib/hero";

export const listCtrl = async (ctx: Context, next: Function) => {
  const heroes = await listHero(100, 0);
  ctx.status = 200;
  ctx.body = {heroes};
};
