import Button from '../../contexts/shared/infrastructure/onoff/Button';

/**
 * @example
 * import Onoff from '../infrastructure/onoff/Onoff';
 * 
 * const buttons: Button[] = [synchronizeOnOffButton];
 * 
 * const onoff = new Onoff(buttons);
 *
 * onoff.listen(() => {
 *   logger('The device is running');
 * });
 */
class Onoff {
  public buttons: Button[];

  constructor(buttons: Button[]) {
    this.buttons = buttons;
  }

  listen(cb?: () => void) {
    if (cb) {
      cb();
    }

    process.on('SIGINT', () => {
      this.buttons.forEach((button) => {
        button.exit();
      });
    });
  }
}

export default Onoff;
