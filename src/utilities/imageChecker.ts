import { promises as fsPromises } from 'fs';
import path from 'path';

const imageChecker = async (filename: string) => {
  try {
    const fullImgPath = `${
      path.join(__dirname, '../../images/')+ filename
    }`;
    // eslint-disable-next-line quotes
    const fullImages = await fsPromises.readdir(fullImgPath);
    const imageFile = fullImages.find((image) => {
      image === filename;
    });
    if (imageFile) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(`Image does not exist: ${err}`);

    // testing image path
    // const newPath =path.resolve(process.cwd()+`/images/${filename}`);
    // const new_2 = JSON.stringify(newPath).replace(/\\\\/g, '/');
    const newPath = path.join(__dirname, '../../images/')+ filename;
    console.log(newPath);
  }
};

export default imageChecker;
