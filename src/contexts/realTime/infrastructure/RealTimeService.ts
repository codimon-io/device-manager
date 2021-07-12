import Events from '../../../infrastructure/SocketClient/Events';
import IRealTimeService, { ISendPayload } from '../domain/IRealTimeService';
import SocketClient from '../../../infrastructure/SocketClient/SocketClient';

class RealTimeService implements IRealTimeService {
  private socketClient: SocketClient;

  constructor(socketClient: SocketClient) {
    this.socketClient = socketClient;
  }

  sendImage(payload: ISendPayload): void {
    this.socketClient.socket.emit(Events.DeviceStreaming, payload);
  }
}

export default RealTimeService;
