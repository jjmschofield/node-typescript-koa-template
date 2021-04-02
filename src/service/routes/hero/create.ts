import Joi from "joi";
import {Context} from "koa";
import {createHero} from "../../lib/hero";

interface ValidRequest {
  name: string,
  valid: boolean,
}

export const createCtrl = async (ctx: Context, next: Function) => {
  const req = getValidatedReq(ctx);

  if (!req.valid) {
    ctx.status = 400;
    return;
  }

  const hero = await createHero(req.name);

  ctx.status = 200;
  ctx.body = {hero};
};

const getValidatedReq = (ctx: Context): ValidRequest => {
  const req = {
    name: ctx.request.body.name,
  }

  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(256)
      .required(),
  });

  const validation = schema.validate(req);

  return {...req, valid: !validation.error};
}
