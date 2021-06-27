import debug from 'debug';
import { socketClient } from '../../../../infrastructure/socketClient/SocketClient';

const logger = debug('device:contexts:device:infrastructure:subscribers:onStopStreaming');

socketClient.socket.on('user:stop-streaming', () => {});
