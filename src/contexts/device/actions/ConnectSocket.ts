import Action from '../../shared/domain/Action';
import debug from 'debug';
import ISocketLed from '../domain/ISocketLed';
import SocketClient from '../../../infrastructure/socketClient/SocketClient';

const logger = debug('device:contexts:device:actions:ConnectSocket');

const loggerError = debug('device:contexts:device:actions:ConnectSocket:error');

class ConnectSocket extends Action {
  private socketLed: ISocketLed;

  private socketClient: SocketClient;

  constructor(socketLed: ISocketLed, socketClient: SocketClient) {
    super();

    this.socketLed = socketLed;

    this.socketClient = socketClient;
  }

  async execute(): Promise<void> {
    try {
      this.socketClient.connect();

      this.socketLed.turnOn();

      logger('The device is online');
    } catch(error) {
      loggerError(error.message);
    }
  }
}

export default ConnectSocket;