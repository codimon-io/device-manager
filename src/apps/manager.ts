import '../contexts/device/infrastructure/subscribers/onRemoteControl';
import '../contexts/device/infrastructure/subscribers/onStartStreaming';
import Button from '../contexts/shared/infrastructure/onoff/Button';
import debug from 'debug';
import DeviceRepository from '../contexts/device/infrastructure/DeviceRepository/DeviceRepository';
import InitSate from '../contexts/device/actions/InitState';
import Onoff from '../infrastructure/onoff/Onoff';
import state from '../contexts/device/state/state';
import synchronizeOnOffButton from '../contexts/device/infrastructure/buttons/synchronizeOnOffButton';
import connectSocketButton from '../contexts/device/infrastructure/buttons/connectSocketButton';

const logger = debug('device:apps:manager');

const buttons: Button[] = [
  synchronizeOnOffButton,
  connectSocketButton,
];

const initSate = new InitSate(state, new DeviceRepository());

const onoff = new Onoff(buttons, initSate);

onoff.listen(() => {
  logger('The device is running');
});
