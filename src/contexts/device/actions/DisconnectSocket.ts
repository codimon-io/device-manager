import Action from '../../shared/domain/Action';
import debug from 'debug';
import IState from '../domain/IState';
import ISocketLed from '../domain/ISocketLed';
import SocketClient from '../../../infrastructure/socketClient/SocketClient';

const logger = debug('device:contexts:device:actions:DisconnectSocket');

const loggerError = debug('device:contexts:device:actions:DisconnectSocket:error');

class DisconnectSocket extends Action {
  private state: IState;

  private socketLed: ISocketLed;

  private socketClient: SocketClient;

  constructor(state: IState, socketLed: ISocketLed, socketClient: SocketClient) {
    super();
    this.state = state;

    this.socketLed = socketLed;

    this.socketClient = socketClient;
  }

  async execute(): Promise<void> {
    try {
      this.socketClient.disconnect();

      this.socketLed.turnOff();

      this.state.isOnline = false;

      logger('The device is offline');
    } catch(error) {
      loggerError(error.message);
    }
  }
}

export default DisconnectSocket;