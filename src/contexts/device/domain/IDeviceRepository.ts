/* eslint-disable no-unused-vars */
import Device from './Device';

interface IDeviceRepository {
  get(): Promise<Device>;
  save(device: Device): Promise<void>;
}

export default IDeviceRepository;
