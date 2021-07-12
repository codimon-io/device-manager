import Events from '../../../../infrastructure/SocketClient/Events';
import { Socket } from 'socket.io-client';
import { socketClient } from '../../../../infrastructure/SocketClient/SocketClient';
import StartStreaming from '../../actions/StartStreaming';
import Camera from '../Camera';
import RealTimeService from '../RealTimeService';

interface IStartStreamingData {
  userId: string;
}

const camera = new Camera();

const realTimeService = new RealTimeService(socketClient);

const startStreaming = new StartStreaming(camera, realTimeService);

const onStartStreaming = {
  subject: Events.DeviceStartStreaming,
  listen: (socket: Socket) => (data: IStartStreamingData) => {
    startStreaming.execute(data);
  },
};

export default onStartStreaming;
