import GameSavingLoader from './modules/GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (err) {
    console.log(err);
  }
})();
