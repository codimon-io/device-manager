export interface ISendPayload {
  userId: string;
  imageBuffer: ArrayBuffer;
}

interface IRealTimeService {
  sendImage(payload: ISendPayload): void
}

export default IRealTimeService;
