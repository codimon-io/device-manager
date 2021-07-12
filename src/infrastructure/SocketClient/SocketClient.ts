import { io, Socket } from 'socket.io-client';
import config from '../config/index';
import DeviceId from '../../contexts/device/domain/DeviceId';
import Events from './Events';

interface IListener {
  subject: Events|string;
  listen(socket: Socket, log?: any): (data: any) => void;
}

class SocketClient {
  public socket: Socket;

  private deviceListeners: IListener[]

  constructor() {
    this.socket = io(config.server.url, {
      autoConnect: false
    });

    this.deviceListeners = [];
  }

  public use(deviceListeners: IListener[]): void {
    this.deviceListeners = deviceListeners;
  }

  public connect(deviceId: DeviceId): void {
    this.socket.connect();

    this.socket.emit(Events.DeviceIdentify, {
      deviceId: deviceId.value,
      clientType: 'device',
    });

    this.socket.on("disconnect", (reason) => {
      if (reason === "io server disconnect") {
        this.socket.connect();

        this.socket.emit(Events.DeviceIdentify, {
          deviceId: deviceId.value,
          clientType: 'device',
        });
      }
    });

    this.deviceListeners.forEach((event) => {
      this.socket.on(event.subject, event.listen(this.socket));
    });
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}

export const socketClient = new SocketClient();

export default SocketClient;