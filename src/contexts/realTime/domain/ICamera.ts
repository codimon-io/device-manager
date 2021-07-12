interface ICamera {
  start(callback: (imageBuffer: ArrayBuffer) => void): void;
  stop(callback: () => void): void;
}

export default ICamera;
