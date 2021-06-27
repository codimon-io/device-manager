import { io, Socket } from 'socket.io-client';
import config from '../config/index';
import DeviceId from '../../contexts/device/domain/DeviceId';

class SocketClient {
  public socket: Socket;

  constructor() {
    this.socket = io(config.server.url, {
      autoConnect: false
    });
  }

  public connect(deviceId: DeviceId): void {
    this.socket.connect();

    this.socket.emit('device:identify', {
      deviceId: deviceId.value,
      clientType: 'device',
    });

    this.socket.on("disconnect", (reason) => {
      if (reason === "io server disconnect") {
        this.socket.connect();

        this.socket.emit('device:identify', {
          deviceId: deviceId.value,
          clientType: 'device',
        });
      }
    });
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}

export const socketClient = new SocketClient();

export default SocketClient;