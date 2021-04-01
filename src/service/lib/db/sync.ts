import * as heroes from "../hero";

export const syncDb = async () => {
  await heroes.sync();
};
