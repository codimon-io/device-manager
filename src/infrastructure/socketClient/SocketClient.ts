import { io, Socket } from 'socket.io-client';
import config from '../config/index';

class SocketClient {
  private socket: Socket;

  constructor() {
    this.socket = io(config.server.url);
  }

  emit() {
    this.socket.emit('device:info', {
      message: 'holiiiii',
    });
  }
}

export const socketClient = new SocketClient();

export default SocketClient;
