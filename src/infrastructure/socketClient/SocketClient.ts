import { io, Socket } from 'socket.io-client';

class SocketClient {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3003');
  }

  emit() {
    this.socket.emit('device:info', {
      message: 'holiiiii',
    });
  }
}

export default SocketClient;
