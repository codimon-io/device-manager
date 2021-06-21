/* eslint-disable no-unused-vars */
import Device from './Device';

interface ISynchronizeService {
  sync(device: Device): Promise<Device>;
}

export default ISynchronizeService;
