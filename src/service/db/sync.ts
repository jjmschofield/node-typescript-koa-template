import * as heroes from "../hero/lib";

export const syncDb = async () => {
  await heroes.sync();
};
