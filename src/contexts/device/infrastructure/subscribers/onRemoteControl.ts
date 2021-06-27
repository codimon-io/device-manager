import debug from 'debug';
import { socketClient } from '../../../../infrastructure/socketClient/SocketClient';

const logger = debug('device:contexts:device:infrastructure:subscribers:onRemoteControl');

socketClient.socket.on('user:remote-control', (data) => {
  logger(data);
});
