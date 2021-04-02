import {HeroModel} from "../db/model";
import {HeroRecord} from "./types";
import log from "../../../lib/logger";

export const destroyHero = async (id: string): Promise<number> => {
  try {
    const count = await HeroModel.destroy({where: {id}});

    if(count > 0){
      log.info('HERO_DESTROYED', 'destroyed a hero', {id});
    }

    return count;
  } catch (error) {
    log.error('HERO_DESTROY_FAILED', 'failed to destroy a hero', {id, error});
    throw error;
  }
};

