import read from './reader';
import json from './parser';

export default class GameSavingLoader {
	static async load() {
		const data = await read();
		const value = await json(data);
		const saving = await JSON.parse(value);
		return saving;
	}
}
