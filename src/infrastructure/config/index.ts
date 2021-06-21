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
};
