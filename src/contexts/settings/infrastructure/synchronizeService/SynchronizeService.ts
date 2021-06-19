import axios from 'axios';
import debug from 'debug';
import ISynchronizeService from '../../domain/ISynchronizeService';
import Settings from '../../domain/Settings';
import config from '../../../../infrastructure/config';

const error = debug('device:contexts:settings:infrastructure:SynchronizeService:error');

class SynchronizeService implements ISynchronizeService {
  private url: string;

  constructor() {
    this.url = config.server.url;
  }

  async sync(settings: Settings): Promise<Settings> {
    const result = await axios({
      url: `${this.url!}/devices/${settings.getId().value}/synchronize`,
      method: 'post',
      // headers: { 'X-Requested-With': 'XMLHttpRequest' },
      data: settings.toJSON(),
    });

    if (!result.data) {
      error('SynchronizeService Error');

      throw Error('SynchronizeService Error');
    }

    const newSettings = Settings.fromJSON(result.data);

    return newSettings;
  }
}

export default SynchronizeService;
