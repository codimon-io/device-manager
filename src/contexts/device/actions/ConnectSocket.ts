import Action from '../../shared/domain/Action';
import debug from 'debug';
import IState from '../domain/IState';
import ISocketLed from '../domain/ISocketLed';
import SocketClient from '../../../infrastructure/SocketClient/SocketClient';

const logger = debug('device:contexts:device:actions:ConnectSocket');

const loggerError = debug('device:contexts:device:actions:ConnectSocket:error');

class ConnectSocket extends Action {
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
      this.socketClient.connect(this.state.deviceId!);

      this.socketLed.turnOn();

      this.state.isOnline = true;

      logger('The device is online');
    } catch(error) {
      loggerError(error.message);
    }
  }
}

export default ConnectSocket;