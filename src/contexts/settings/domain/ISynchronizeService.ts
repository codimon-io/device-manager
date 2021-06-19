/* eslint-disable no-unused-vars */
import Settings from './Settings';

interface ISynchronizeService {
  sync(settings: Settings): Promise<Settings>;
}

export default ISynchronizeService;
