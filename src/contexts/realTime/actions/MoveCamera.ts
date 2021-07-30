import _ from 'lodash';
import Action from '../../shared/domain/Action';
import debug from 'debug';
import ICameraServo from '../domain/ICameraServo';

const logger = debug('device:contexts:real-time:actions:MoveCamera');

const loggerError = debug('device:contexts:real-time:actions:MoveCamera:error');

interface MoveCameraData {
  angle: number
}

class MoveCamera extends Action {
  private cameraServo: ICameraServo;

  constructor(cameraServo: ICameraServo) {
    super();

    this.cameraServo = cameraServo;
  }

  async execute(data: MoveCameraData): Promise<void> {
    try {
      const { angle } = data;

      if (!_.inRange(angle, -91, 91)) {
        throw Error(`The angle ${angle} is out of range`);
      }

      logger('Camera servo is moving to angle:', angle);

      this.cameraServo.to(angle);
    } catch (error) {
      loggerError(error.message);
    }
  }
}

export default MoveCamera;
