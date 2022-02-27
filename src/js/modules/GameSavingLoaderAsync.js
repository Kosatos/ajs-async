import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        const data = await read();
        const jsonData = await json(data);

        try {
          resolve(new GameSaving(JSON.parse(jsonData)));
        } catch (e) {
          reject(e);
        }
      })();
    });
  }
}
