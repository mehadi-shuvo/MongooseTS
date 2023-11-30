import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// envImport
const PORT = config.port;
const DB_URL = config.DB_URL;

// mongoose======STARTS========
async function main() {
  try {
    await mongoose.connect(DB_URL as string);

    app.listen(PORT, () => {
      console.log(`Example app is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
