/* eslint-disable sort-imports */
import debug from 'debug';
import Onoff from '../infrastructure/onoff/Onoff';
import Button from '../contexts/shared/infrastructure/onoff/Button';
import synchronizeOnOffButton from '../contexts/settings/infrastructure/button/synchronizeOnOffButton';

const logger = debug('device:apps:manager');

const buttons: Button[] = [synchronizeOnOffButton];

const onoff = new Onoff(buttons);

onoff.listen(() => {
  logger('The device is listening');
});
