import Button from '../contexts/shared/infrastructure/johnnyFive/Button';
import debug from 'debug';
import JohnnyFive from '../infrastructure/JohnnyFive/JohnnyFive';
import synchronizeJohnnyFiveButton from '../contexts/device/infrastructure/button/synchronizeJohnnyFiveButton';

const logger = debug('device:apps:manager');

const buttons: Button[] = [synchronizeJohnnyFiveButton];

const johnnyFive = new JohnnyFive(buttons);

johnnyFive.listen(() => {
  logger('The device is running');
});
