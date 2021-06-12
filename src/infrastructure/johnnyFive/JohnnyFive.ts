import five from 'johnny-five';

class JohnnyFive {
  public board: five.Board

  constructor() {
    this.board = new five.Board();
  }

  listen() {
    this.board.on('ready', () => {

    });
  }
}

export default JohnnyFive;
