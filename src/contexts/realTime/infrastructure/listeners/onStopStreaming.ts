import Events from '../../../../infrastructure/SocketClient/Events';
import { Socket } from 'socket.io-client';
import StopStreaming from '../../actions/StopStreaming';
import Camera from '../Camera';

interface IStopStreamingData {
  userId: string;
}

const camera = new Camera();

const stopStreaming = new StopStreaming(camera);

const onStopStreaming = {
  subject: Events.DeviceStopStreaming,
  listen: (socket: Socket) => (data: IStopStreamingData) => {
    stopStreaming.execute(data);
  },
};

export default onStopStreaming;