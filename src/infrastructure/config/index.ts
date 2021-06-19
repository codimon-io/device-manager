import * as dotenv from 'dotenv';

dotenv.config();

const dev = 'development';

export default {
  env: process.env.NODE_ENV || dev,
  server: {
    url: process.env.SERVER_URL!,
  },
  button: {
    synchronize: Number(process.env.BUTTON_SYNCHRONIZE!),
  },
};
