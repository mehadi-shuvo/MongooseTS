import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  DB_URL: process.env.DB_URL,
  BCRYPT_SALT: process.env.BCRYPT_SALT,
  DEFAULT_PASS: process.env.DEFAULT_PASS,
};
