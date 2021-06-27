import Action from '../../contexts/shared/domain/Action';
import Button from '../../contexts/shared/infrastructure/onoff/Button';
import debug from 'debug';

const errorLogger = debug('device:infrastructure:Onoff:error');

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

  public initState: Action;

  constructor(buttons: Button[], initState: Action) {
    this.buttons = buttons;

    this.initState = initState;
  }

  public async listen(cb?: () => void): Promise<void> {
    try {
      await this.initState.execute();

      if (cb) {
        cb();
      }
    } catch (error) {
      errorLogger(error.message);
    } finally {
      process.on('SIGINT', () => {
        this.buttons.forEach((button) => {
          button.exit();
        });
      });
    }
  }
}

export default Onoff;
