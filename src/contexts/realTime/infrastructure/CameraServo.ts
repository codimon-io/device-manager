import ICameraServo from '../domain/ICameraServo';
import { Gpio } from 'pigpio';
import config from '../../../infrastructure/config';

class CameraServo implements ICameraServo {
  private motor: Gpio;

  constructor() {
    this.motor = new Gpio(config.cameraServo.pin, { mode: Gpio.OUTPUT });
  }

  /**
   * @param angle the angle is in the range between -90 and 90
   * @returns a number in the range 500 to 2500
   */
  private parseAngle(angle: number): number {
    const newAngle = angle + 90;
    const pwm =  Math.floor((2000/180 * newAngle) + 500);
    return pwm;
  }

  public to(angle: number): void {
    this.motor.servoWrite(this.parseAngle(angle));
  }
}

export const cameraServo = new CameraServo();

export default CameraServo;
