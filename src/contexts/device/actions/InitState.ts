import Action from '../../shared/domain/Action';
import debug from 'debug';
import IDeviceRepository from '../domain/IDeviceRepository';
import IState from '../domain/IState';

const logger = debug('device:contexts:device:actions:InitState');

const loggerError = debug('device:contexts:device:actions:InitState:error');

class InitState extends Action {
  private state: IState;

  private deviceRepository: IDeviceRepository;

  constructor(state: IState, deviceRepository: IDeviceRepository) {
    super();

    this.state = state;

    this.deviceRepository = deviceRepository;
  }

  async execute(): Promise<void> {
    try {
      const device = await this.deviceRepository.get();

      this.state.deviceId = device.getId();

      this.state.isOnline = false;

      logger('The state is loaded', this.state);
    } catch (error) {
      loggerError(error.message);
    }
  }
}

export default InitState;
