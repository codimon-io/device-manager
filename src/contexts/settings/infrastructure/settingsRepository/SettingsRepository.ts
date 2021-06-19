import debug from 'debug';
import path from 'path';
// eslint-disable-next-line sort-imports
import fs from 'fs';
// eslint-disable-next-line sort-imports
import ISettingsRepository from '../../domain/ISettingsRepository';
import Settings from '../../domain/Settings';

const error = debug('device:contexts:settings:infrastructure:SettingsRepository:error');

class SettingsRepository implements ISettingsRepository {
  private settingsFile: string;

  constructor() {
    this.settingsFile = path.resolve(process.cwd(), 'data', 'settings.json');
  }

  async get(): Promise<Settings> {
    try {
      const settingsJSON = await fs.promises.readFile(this.settingsFile, 'utf8');

      return Settings.fromJSON(JSON.parse(settingsJSON));
    } catch (err) {
      error(err.message);

      throw err;
    }
  }

  async save(settings: Settings): Promise<void> {
    try {
      await fs.promises.writeFile(this.settingsFile, JSON.stringify(settings.toJSON()), 'utf8');
    } catch (err) {
      error(err.message);

      throw err;
    }
  }
}

export default SettingsRepository;
