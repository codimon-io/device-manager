import Button from '../../contexts/shared/infrastructure/JohnnyFive/Button';

class JohnnyFive {
  public buttons: Button[];

  constructor(buttons: Button[]) {
    this.buttons = buttons;
  }

  listen(cb?: () => void) {
    this.buttons.forEach((button) => {
      button.start();
    });

    if (cb) {
      cb();
    }
  }
}

export default JohnnyFive;
