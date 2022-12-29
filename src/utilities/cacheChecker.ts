import { promises as fsPromises } from 'fs';

const cacheChecker = async (
  filename: string,
  width: number,
  height: number
) => {
  try {
    const resizedImgPath = `/resizedImages/${filename}`;
    // eslint-disable-next-line quotes
    const cachedImages = await fsPromises.readdir(resizedImgPath);
    const image = cachedImages.find((image) => {
      image === `${filename}-${width}x${height}`;
    });
    if (image) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(`An error occurred while resizing image: ${err}`);
  }
};

export default cacheChecker;
