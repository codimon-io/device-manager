import onoff, { BinaryValue } from 'onoff';
import Action from '../../domain/Action';
import debug from 'debug';

const errorLogger = debug('device:hardware:button:error');

class Button {
  private button: onoff.Gpio;

  constructor(pin: number) {
    this.button = new onoff.Gpio(pin, 'in', 'both');
  }

  onPress(action: Action) {
    this.button.watch((error: Error | null | undefined, value: BinaryValue) => {
      if (error) {
        errorLogger(error.message);
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
