import debug from 'debug';
import { socketClient } from '../../../../infrastructure/socketClient/SocketClient';
import raspberryPiCamera from 'raspberry-pi-camera-native';

const loggerStart = debug('device:contexts:device:infrastructure:subscribers:onStartStreaming');

const loggerStop = debug('device:contexts:device:infrastructure:subscribers:onStopStreaming');

socketClient.socket.on('user:start-streaming', (userId) => {
  loggerStart('Starting');

  raspberryPiCamera.start({
    width: 640,
    height: 480,
    fps: 5,
    encoding: 'JPEG',
    quality: 30,
  });

  raspberryPiCamera.on('frame', (frame: any) => {
    socketClient.socket.emit('device:video-streaming', {
      userId,
      videoBuffer: frame,
    });
  });
});

socketClient.socket.on('user:stop-streaming', () => {
  loggerStop('Stopping');

  raspberryPiCamera.stop(() => {
    loggerStop('Stopped');
  });
});
