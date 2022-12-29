import imageChecker from './imageChecker';

const requestChecker = async (
  filename: string,
  width: number,
  height: number
) => {
  try {
    if (!filename) {
      return 'No image name given';
    } else if (!width || !height) {
      return 'No height or width given';
    } else if (!(await imageChecker(filename))) {
      return 'Image does not exist';
    }
    return 'Everything looks good!!!';
  } catch (err) {
    console.log(`An error occurred: ${err}`);
  }
};

export default requestChecker;
