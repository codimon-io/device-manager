import Button from '../contexts/shared/infrastructure/onoff/Button';
import debug from 'debug';
import Onoff from '../infrastructure/onoff/Onoff';
import synchronizeOnOffButton from '../contexts/device/infrastructure/buttons/synchronizeOnOffButton';
import connectSocketButton from '../contexts/device/infrastructure/buttons/connectSocketButton';

const logger = debug('device:apps:manager');

const buttons: Button[] = [
  synchronizeOnOffButton,
  connectSocketButton,
];

const onoff = new Onoff(buttons);

onoff.listen(() => {
  logger('The device is running');
});
