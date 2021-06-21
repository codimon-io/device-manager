import Action from '../../shared/domain/Action';
import debug from 'debug';
import IDeviceRepository from '../domain/IDeviceRepository';
import ISynchronizeService from '../domain/ISynchronizeService';

const logger = debug('device:contexts:device:actions:Synchronize');

const loggerError = debug('device:contexts:device:actions:Synchronize:error');

class Synchronize extends Action {
  private synchronizeService: ISynchronizeService;

  private deviceRepository: IDeviceRepository;

  constructor(synchronizeService: ISynchronizeService, deviceRepository: IDeviceRepository) {
    super();

    this.synchronizeService = synchronizeService;

    this.deviceRepository = deviceRepository;
  }

  async execute(): Promise<void> {
    try {
      const device = await this.deviceRepository.get();

      const newDevice = await this.synchronizeService.sync(device);

      await this.deviceRepository.save(newDevice);

      logger('New device information:', newDevice.toJSON());
    } catch (error) {
      loggerError(error.message);
    }
  }
}

export default Synchronize;
