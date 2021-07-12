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

/* 
import debug from 'debug';
import { socketClient } from '../../../../infrastructure/SocketClient/SocketClient';
import raspberryPiCamera from 'raspberry-pi-camera-native';

const loggerStart = debug('device:contexts:device:infrastructure:subscribers:onStartStreaming');

const loggerStop = debug('device:contexts:device:infrastructure:subscribers:onStopStreaming');

socketClient.socket.on('device:start-streaming', (data: any) => {
  const { userId } = data;
  loggerStart('Starting');

  raspberryPiCamera.start({
    width: 640,
    height: 480,
    fps: 5,
    encoding: 'JPEG',
    quality: 30,
  });

  raspberryPiCamera.on('frame', (frame: ArrayBuffer) => {
    socketClient.socket.emit('device:streaming', {
      userId,
      videoBuffer: frame,
    });
  });
});

socketClient.socket.on('device:stop-streaming', (data: any) => {
  loggerStop('Stopping');

  raspberryPiCamera.stop(() => {
    loggerStop('Stopped');
  });
});
 */