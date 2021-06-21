import ILed from '../../domain/hardware/ILed';
import onoff from 'onoff';

class Led implements ILed {
  private led: onoff.Gpio;

  constructor(pin: number) {
    this.led = new onoff.Gpio(pin, 'out');
  }

  public turnOn() {
    this.led.writeSync(1);
  }

  public turnOff() {
    this.led.writeSync(0);
  }

  exit() {
    this.led.unexport();
  }
}

export default Led;
