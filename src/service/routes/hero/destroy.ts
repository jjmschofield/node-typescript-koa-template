import {Context} from "koa";
import {destroyHero} from "../../lib/hero";
import Joi from "joi";

interface ValidRequest {
  params: { id: string },
  valid: boolean,
}

export const destroyCtrl = async (ctx: Context, next: Function) => {
  const req = getValidatedReq(ctx);

  if (!req.valid) {
    ctx.status = 400;
    return;
  }

  await destroyHero(req.params.id);

  ctx.status = 200;
};

const getValidatedReq = (ctx: Context): ValidRequest => {
  const req = {
    params: {id: ctx.params.id}
  }

  const schema = Joi.object({
    id: Joi.string()
      .uuid()
      .required(),
  });

  const validation = schema.validate(req);

  return {...req, valid: !!validation.error};
}
