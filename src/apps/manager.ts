import Button from '../contexts/shared/infrastructure/onoff/Button';
import debug from 'debug';
import DeviceRepository from '../contexts/device/infrastructure/DeviceRepository/DeviceRepository';
import InitSate from '../contexts/device/actions/InitState';
import Onoff from '../infrastructure/onoff/Onoff';
import state from '../contexts/device/state/state';
import synchronizeOnOffButton from '../contexts/device/infrastructure/buttons/synchronizeOnOffButton';
import connectSocketButton from '../contexts/device/infrastructure/buttons/connectSocketButton';
import { socketClient } from '../infrastructure/SocketClient/SocketClient';
import onStartStreaming from '../contexts/realTime/infrastructure/listeners/onStartStreaming';
import onStopStreaming from '../contexts/realTime/infrastructure/listeners/onStopStreaming';
import onRemoteControl from '../contexts/realTime/infrastructure/listeners/onRemoteControl';

const logger = debug('device:apps:manager');

socketClient.use([
  onStartStreaming,
  onStopStreaming,
  onRemoteControl,
]);

const buttons: Button[] = [
  synchronizeOnOffButton,
  connectSocketButton,
];

const initSate = new InitSate(state, new DeviceRepository());

const onoff = new Onoff(buttons, initSate);

onoff.listen(() => {
  logger('The device is running');
});

export default onoff;
