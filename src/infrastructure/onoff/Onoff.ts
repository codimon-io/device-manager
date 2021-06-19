import Button from '../../contexts/shared/infrastructure/onoff/Button';

class Onoff {
  public buttons: Button[];

  constructor(buttons: Button[]) {
    this.buttons = buttons;
  }

  // eslint-disable-next-line class-methods-use-this
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
