import * as dotenv from 'dotenv';

dotenv.config();

const dev = 'development';

export default {
  env: process.env.NODE_ENV || dev,
  server: {
    port: process.env.PORT || 3003,
  },
};
