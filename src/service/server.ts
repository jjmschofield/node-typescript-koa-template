import 'source-map-support/register';
import log from '../lib/logger';
import config from '../lib/config';
import {createApp, startHttpServer} from "../lib/koa";
import {initDb, syncDb, getDb} from "./db";
import {createRouter} from "./router";

export const server = async () => {
  const app = createApp(createRouter());
  startHttpServer(app, process.env.HTTP_PORT || '80');
};

export const db = async () => {
  await initDb();
  await syncDb();
}

(async () => {
  try {
    await config.load();
    process.title = process.env.PROC_TITLE || 'node';
    await db();
    await server();
  } catch (error) {
    log.error('UNHANDLED_ERROR', 'An unhandled exception has caused the app to terminate', {error});
    await getDb().close();
    process.exit(1);
  }
})();
