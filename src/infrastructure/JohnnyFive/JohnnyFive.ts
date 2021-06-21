import Button from '../../contexts/shared/infrastructure/johnnyFive/Button';
import JohnnyFive from 'johnny-five';
import { RaspiIO } from 'raspi-io';

/**
 * @example
 * import Button from '../contexts/shared/infrastructure/johnnyFive/Button';
 * import JohnnyFive from '../infrastructure/JohnnyFive/JohnnyFive';
 * 
 * const buttons: Button[] = [synchronizeJohnnyFiveButton];
 *
 * const johnnyFive = new JohnnyFive(buttons);
 *
 * johnnyFive.listen(() => {
 *  logger('The device is running');
 * });
 */
class JF {
  private buttons: Button[];

  private board: JohnnyFive.Board;

  constructor(buttons: Button[]) {
    this.buttons = buttons;

    this.board = new JohnnyFive.Board({
      io: new RaspiIO()
    });
  }

  listen(cb?: () => void) {
    this.board.on('ready', () => {
      this.buttons.forEach((button) => {
        button.start();
      });
  
      if (cb) {
        cb();
      }
    });
  }
}

export default JF;
