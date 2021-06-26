import onoff, { BinaryValue } from 'onoff';
import Action from '../../domain/Action';
import debug from 'debug';

const errorLogger = debug('device:hardware:button:error');

class Button {
  private button: onoff.Gpio;

  private pressed: boolean;

  constructor(pin: number) {
    this.button = new onoff.Gpio(pin, 'in', 'both');

    this.pressed = false;
  }

  private execute(action: Action|(() => void)): void {
    if (action instanceof Action) {
      action.execute();
    } else {
      action();
    }
  }

  public onPress(action: Action|(() => void)): void {
    this.button.watch((error: Error | null | undefined, value: BinaryValue) => {
      if (error) {
        errorLogger(error.message);
      }

      if (value === 1 && this.pressed === false) {
        this.execute(action);

        this.pressed = true;
      } 
      
      if (value === 0 && this.pressed === true){
        this.pressed = false;
      }
    });
  }

  public exit(): void {
    this.button.unexport();
  }
}

export default Button;
