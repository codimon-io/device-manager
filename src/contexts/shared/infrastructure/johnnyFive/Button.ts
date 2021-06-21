import Action from '../../domain/Action';
import five from 'johnny-five';

class Button {
  private button: five.Button;

  private onPressCallback: () => any;

  constructor(pin: number) {
    this.button = new five.Button(pin);

    this.onPressCallback = () => {};
  }

  public onPress(action: Action) {
    this.onPressCallback = action.execute;
  }

  public start() {
    this.button.on('press', this.onPressCallback());
  }
}

export default Button;
