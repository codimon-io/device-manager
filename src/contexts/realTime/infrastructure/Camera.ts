import ICamera from '../domain/ICamera';
import raspberryPiCamera from 'raspberry-pi-camera-native';
import config from '../../../infrastructure/config';

class Camera implements ICamera {
  start(callback: (imageBuffer: ArrayBuffer) => void): void {
    raspberryPiCamera.start(config.camera);
  
    raspberryPiCamera.on('frame', (frame: ArrayBuffer) => {
      callback(frame);
    });
  }

  stop(callback: () => void): void {
    raspberryPiCamera.stop(callback);
  }
}

export default Camera;
