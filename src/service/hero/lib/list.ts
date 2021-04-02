import {HeroRecord} from "./types";
import {HeroModel} from "../db/model";
import log from "../../../lib/logger";

export const listHero = async (limit: number, offset: number): Promise<HeroRecord[]> => {
  try {
    const heroes = await HeroModel.findAll({
      order: [['createdAt', 'DESC']],
      limit,
      offset,
    });

    log.info('HEROES_LISTED', 'got a list of heroes', {count: heroes.length});

    return heroes.map(h => h.toPojo());
  } catch (error) {
    log.error('HEROES_LIST_FAILED', 'failed to get a list of heroes', {error});
    throw error;
  }
};
