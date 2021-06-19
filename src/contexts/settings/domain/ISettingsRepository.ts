/* eslint-disable no-unused-vars */
import Settings from './Settings';

interface ISettingsRepository {
  get(): Promise<Settings>;
  save(settings: Settings): Promise<void>;
}

export default ISettingsRepository;
