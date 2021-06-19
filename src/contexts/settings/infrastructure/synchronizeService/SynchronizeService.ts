import axios from 'axios';
import debug from 'debug';
import ISynchronizeService from '../../domain/ISynchronizeService';
import Settings from '../../domain/Settings';

const error = debug('device:contexts:settings:infrastructure:SynchronizeService:error');

class SynchronizeService implements ISynchronizeService {
  private url: string;

  constructor() {
    this.url = '';
  }

  async sync(settings: Settings): Promise<Settings> {
    const result = await axios({
      url: this.url,
      method: 'post',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      data: settings.toJSON(),
    });

    if (!result.data) {
      error('');

      throw Error();
    }

    const newSettings = Settings.fromJSON(result.data);

    return newSettings;
  }
}

export default SynchronizeService;
