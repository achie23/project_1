import { promises as fsPromises } from 'fs';

const cacheChecker = async (
  filename: string,
  width: number,
  height: number
) => {
  try {
    const resizedImgPath =
      process.cwd() + '/resizedImages/' + width + 'x' + height + filename;
    const cachedImages = await fsPromises.readFile(resizedImgPath);
    if (cachedImages) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(`Cached image does not exist: ${err}`);
  }
};

export default cacheChecker;