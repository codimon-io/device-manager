import Action from '../../shared/domain/Action';
import debug from 'debug';
import IDeviceRepository from '../domain/IDeviceRepository';
import ISynchronizeLed from '../domain/ISynchronizeLed';
import ISynchronizeService from '../domain/ISynchronizeService';

const logger = debug('device:contexts:device:actions:Synchronize');

const loggerError = debug('device:contexts:device:actions:Synchronize:error');

class Synchronize extends Action {
  private synchronizeService: ISynchronizeService;

  private synchronizeLed: ISynchronizeLed;

  private deviceRepository: IDeviceRepository;

  constructor(synchronizeService: ISynchronizeService, synchronizeLed: ISynchronizeLed, deviceRepository: IDeviceRepository) {
    super();

    this.synchronizeService = synchronizeService;

    this.synchronizeLed = synchronizeLed;

    this.deviceRepository = deviceRepository;
  }

  async execute(): Promise<void> {
    try {
      this.synchronizeLed.turnOn();

      const device = await this.deviceRepository.get();

      const newDevice = await this.synchronizeService.sync(device);

      await this.deviceRepository.save(newDevice);

      this.synchronizeLed.turnOff();

      logger('New device information:', newDevice.toJSON());
    } catch (error) {
      loggerError(error.message);
    }
  }
}

export default Synchronize;
