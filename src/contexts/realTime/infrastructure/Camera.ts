import ICamera from '../domain/ICamera';
import raspberryPiCamera from 'raspberry-pi-camera-native';
import config from '../../../infrastructure/config';

class Camera implements ICamera {
  private started: boolean;

  constructor() {
    this.started = false;
  }

  start(callback: (imageBuffer: ArrayBuffer) => void): void {
    if (this.started) {
      raspberryPiCamera.resume();
    } else {
      raspberryPiCamera.start(config.camera);

      this.started = true;
    }
  
    raspberryPiCamera.on('frame', (frame: ArrayBuffer) => {
      callback(frame);
    });
  }

  stop(callback: () => void): void {
    raspberryPiCamera.stop(callback);
  }
}

export const camera = new Camera();

export default Camera;
