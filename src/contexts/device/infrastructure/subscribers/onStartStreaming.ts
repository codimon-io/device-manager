import debug from 'debug';
import { socketClient } from '../../../../infrastructure/socketClient/SocketClient';

const loggerStart = debug('device:contexts:device:infrastructure:subscribers:onStartStreaming');

const loggerStop = debug('device:contexts:device:infrastructure:subscribers:onStopStreaming');

let task: any;

socketClient.socket.on('user:start-streaming', (userId) => {
  loggerStart('Starting');

  task = setInterval(() => {
    socketClient.socket.emit('device:video-streaming', {
      userId,
      videoBuffer: Math.random()});
  }, 500);
});

socketClient.socket.on('user:stop-streaming', () => {
  loggerStop('Stopping');

  clearInterval(task);
});
