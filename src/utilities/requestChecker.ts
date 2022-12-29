import { promises as fsPromises } from 'fs';

const requestChecker = async (
  filename: string,
  width: number,
  height: number
) => {
  try {
    // reading full size images
    const fullImgPath = process.cwd() + '/images/' + filename;
    const imagePath = await fsPromises.readFile(fullImgPath);
    // url request checker
    if (!filename) {
      return 'No image name given';
    } else if (!width || !height) {
      return 'No height or width given';
    } else if (!imagePath) {
      return 'Image does not exist';
    } else {
      return 'Everything looks good!!!';
    }
  } catch (err) {
    console.log(`An error occurred: ${err}`);
  }
};

export default requestChecker;