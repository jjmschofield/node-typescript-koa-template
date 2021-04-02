import {HeroModel} from "../db/model";
import {HeroRecord} from "./types";
import log from "../../../lib/logger";

export const getHero = async (id: string): Promise<HeroRecord | null> => {
  try {
    const hero = await HeroModel.findOne({where: {id}});

    if (hero) {
      log.info('HERO_GOT', 'got a hero', {id: hero.id});
      return hero.toPojo();
    } else {
      return null;
    }
  } catch (error) {
    log.error('HERO_GET_FAILED', 'failed to get a hero', {id, error});
    throw error;
  }
};

