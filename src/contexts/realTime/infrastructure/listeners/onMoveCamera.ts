import Events from '../../../../infrastructure/SocketClient/Events';
import MoveCamera from '../../actions/MoveCamera';
import { cameraServo } from '../CameraServo';

interface IMoveCameraData {
  angle: number
}

const moveCamera = new MoveCamera(cameraServo)

const onMoveCamera = {
  subject: Events.DeviceMoveCamera,
  listen: () => (data: IMoveCameraData) => {
    moveCamera.execute(data);
  },
};

export default onMoveCamera;