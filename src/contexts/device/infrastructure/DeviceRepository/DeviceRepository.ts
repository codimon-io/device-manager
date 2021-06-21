import Device from '../../domain/Device';
import fs from 'fs';
import IDeviceRepository from '../../domain/IDeviceRepository';
import path from 'path';

class DeviceRepository implements IDeviceRepository {
  private deviceFile: string;

  constructor() {
    this.deviceFile = path.resolve(process.cwd(), 'data', 'device.json');
  }

  async get(): Promise<Device> {
    const deviceJSON = await fs.promises.readFile(this.deviceFile, 'utf8');

    return Device.fromJSON(JSON.parse(deviceJSON));
  }

  async save(device: Device): Promise<void> {
    await fs.promises.writeFile(this.deviceFile, JSON.stringify(device.toJSON()), 'utf8');
  }
}

export default DeviceRepository;
