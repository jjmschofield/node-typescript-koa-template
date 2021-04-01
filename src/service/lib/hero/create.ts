import {getDb} from "../db";
import {HeroModel} from "./model";
import {HeroRecord} from "./types";
import log from "../../../lib/logger";

export const createHero = async (name: string): Promise<HeroRecord> => {
  const transaction = await getDb().transaction();

  try {
    const hero = await HeroModel.create({name}, {transaction});

    await transaction.commit();

    log.info('HERO_CREATED', 'created a new hero', {id: hero.id});

    return hero.toPojo();
  } catch (error) {
    await transaction.rollback();
    log.error('HERO_CREATE_FAILED', 'hero creation encountered an error', {error});
    throw error;
  }
};

