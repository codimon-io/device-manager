import debug from 'debug';
import Events from '../../../../infrastructure/SocketClient/Events';
import { Socket } from 'socket.io-client';

const logger = debug('device:contexts:real-time:infrastructure:listeners:onRemoteControl');

interface IRemoteControlData {
  content: any;
}

const onRemoteControl = {
  subject: Events.DeviceRemoteControl,
  listen: (socket: Socket) => (data: IRemoteControlData) => {
    logger(data.content);
  },
};

export default onRemoteControl;