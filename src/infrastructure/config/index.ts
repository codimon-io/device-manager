import * as dotenv from 'dotenv';

dotenv.config();

const dev = 'development';

export default {
  env: process.env.NODE_ENV || dev,
  server: {
    url: process.env.SERVER_URL!,
  },
  synchronize: {
    button: Number(process.env.SYNCHRONIZE_BUTTON!),
    led: Number(process.env.SYNCHRONIZE_LED!),
  },
  socket: {
    button: Number(process.env.SOCKET_CONNECT_BUTTON!),
    led: Number(process.env.SOCKET_CONNECT_LED!),
  },
  camera: {
    width: 640,
    height: 480,
    fps: 15,
    encoding: 'JPEG',
    quality: 10,
  },
};
