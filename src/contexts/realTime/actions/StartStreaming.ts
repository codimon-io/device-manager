import Action from '../../shared/domain/Action';
import debug from 'debug';
import ICamera from '../domain/ICamera';
import IRealTimeService from '../domain/IRealTimeService';

const logger = debug('device:contexts:real-time:actions:StartStreaming');

const loggerError = debug('device:contexts:real-time:actions:StartStreaming:error');

interface StartStreamingData {
  userId: string
}

class StartStreaming extends Action {
  private camera: ICamera;

  private realTimeService: IRealTimeService;

  constructor(camera: ICamera, realTimeService: IRealTimeService) {
    super();

    this.camera = camera;

    this.realTimeService = realTimeService;
  }

  async execute(data: StartStreamingData): Promise<void> {
    try {
      const { userId } = data;

      logger('Starting streaming...');

      this.camera.start((imageBuffer: ArrayBuffer) => {
        this.realTimeService.sendImage({
          userId,
          imageBuffer,
        });
      });
    } catch (error) {
      loggerError(error.message);
    }
  }
}

export default StartStreaming;
