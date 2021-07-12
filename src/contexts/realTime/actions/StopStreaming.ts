import Action from '../../shared/domain/Action';
import debug from 'debug';
import ICamera from '../domain/ICamera';

const logger = debug('device:contexts:real-time:actions:StopStreaming');

const loggerError = debug('device:contexts:real-time:actions:StopStreaming:error');

interface StopStreamingData {
  userId: string
}

class StopStreaming extends Action {
  private camera: ICamera;

  constructor(camera: ICamera) {
    super();

    this.camera = camera;
  }

  async execute(data: StopStreamingData): Promise<void> {
    try {
      logger('Stopping streaming...');

      this.camera.stop(() => {
        logger('Streaming Stopped');
      });
    } catch (error) {
      loggerError(error.message);
    }
  }
}

export default StopStreaming;
