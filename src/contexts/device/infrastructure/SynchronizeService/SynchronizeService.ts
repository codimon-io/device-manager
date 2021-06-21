import axios from 'axios';
import config from '../../../../infrastructure/config';
import Device from '../../domain/Device';
import ISynchronizeService from '../../domain/ISynchronizeService';

class SynchronizeService implements ISynchronizeService {
  private url: string;

  constructor() {
    this.url = config.server.url;
  }

  async sync(device: Device): Promise<Device> {
    const result = await axios({
      url: `${this.url!}/devices/${device.getId().value}/synchronize`,
      method: 'post',
      // headers: { 'X-Requested-With': 'XMLHttpRequest' },
      data: device.toJSON(),
    });

    if (!result.data) {
      throw Error('SynchronizeService: The response data is empty');
    }

    const newSettings = Device.fromJSON(result.data);

    return newSettings;
  }
}

export default SynchronizeService;
