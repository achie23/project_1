import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import path from 'path';

const imageResizer = async (
  filename: string,
  width: number,
  height: number,
): Promise<unknown> => {
  try {
    const fullImgPath = `${
      path.join(__dirname, '../../images/')+ filename
    }`;
    
    // eslint-disable-next-line quotes
    const fullImages = await fsPromises.readdir(fullImgPath);
    const imageFile = fullImages.find((image) => {
      image === `${filename}`;
    });
    if (imageFile) {
      const resizedImage: sharp.OutputInfo = await sharp(path.resolve(`images/${filename}`))
        .resize(width, height, { fit: 'contain' })
        .toFile(`resizedImages/${filename}-${width}x${height}`);
      return resizedImage;
    }
  } catch (err) {
    console.log(`An error occurred while resizing image. ${err}`);
  }
};

export default imageResizer;
