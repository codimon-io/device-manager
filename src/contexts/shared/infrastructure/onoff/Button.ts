import onoff, { BinaryValue } from 'onoff';
import debug from 'debug';
// eslint-disable-next-line sort-imports
import Action from '../../domain/Action';

const error = debug('device:hardware:button:error');

class Button {
  private button: onoff.Gpio;

  constructor(pin: number) {
    this.button = new onoff.Gpio(pin, 'in', 'both');
  }

  onPress(action: Action) {
    this.button.watch((err: Error | null | undefined, value: BinaryValue) => {
      if (err) {
        error(err.message);
      }

      if (value) {
        action.execute();
      }
    });
  }

  exit() {
    this.button.unexport();
  }
}

export default Button;
