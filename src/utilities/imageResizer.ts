import sharp from 'sharp';

const imageResizer = async (
  filename: string,
  width: number,
  height: number
): Promise<unknown> => {
  try {
    const dir = process.cwd();
    const image = dir + '/images/' + filename;
    const resize_to = dir + '/resizedImages/' + width + 'x' + height + filename;
    const resizedImage: sharp.OutputInfo = await sharp(image)
      .resize(width, height, { fit: 'contain' })
      .toFile(resize_to);
    return resizedImage;
  } catch (err) {
    console.log(`An error occurred while resizing image. ${err}`);
  }
};

export default imageResizer;