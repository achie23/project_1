/* eslint-disable @typescript-eslint/ban-types */
// import dependancies
import express from 'express';
import { promises as fsPromises } from 'fs';
import requestChecker from './requestChecker';
import cacheChecker from './cacheChecker';
import imageResizer from './imageResizer';

const displayImages = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  try {
    const queryParameter = req.query;
    const filename = queryParameter.name as string;
    const height = parseInt(queryParameter.height as unknown as string);
    const width = parseInt(queryParameter.width as unknown as string);

    // check request status
    const checkRequestStatus = await requestChecker(filename, width, height);
    if (checkRequestStatus === 'No image name given') {
      res.write(
        `<p style='color: red; font-size: 16px'>No image name given.</p>
                <p>Please enter url as follows:</p>
                <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>`
      );
      return;
    } else if (checkRequestStatus === 'No height or width given') {
      res.write(
        `<p style='color: red; font-size: 16px'>No height or width given.</p>
                <p>Please enter url as follows:</p>
                <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>`
      );
      return;
    } else if (checkRequestStatus === 'Image does not exist') {
      res.write(
        `<p style="color: red; font-size: 16px">
            Image does not exist.
          </p>`
      );
      return;
    }

    // check cachedImages
    if (!(await cacheChecker(filename, width, height))) {
      await imageResizer(filename, width, height,);
      const imageFile = await fsPromises.readFile(
        `resizeImages/${filename}-${width}x${height}`
      );
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        '<p style="color: green; font-size: 16px;">Image Resized</p><img style="display: block; margin-left: auto; margin-right: auto;" src="data:imageFile/jpeg;base64,'
      );
      res.write(Buffer.from(imageFile).toString('base64'));
      res.end('"/>');
    } else {
      const imageFile = await fsPromises.readFile(
        `resizeImages/${filename}-${width}x${height}`
      );
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        '<p style="color: green; font-size: 16px;">Image Resized</p><img style="display: block; margin-left: auto; margin-right: auto;" src="data:imageFile/jpeg;base64,'
      );
      res.write(Buffer.from(imageFile).toString('base64'));
      res.end('"/>');
    }
    return;
  } catch (err) {
    console.log(`An error occurred while resizing image: ${err}`);
  }

  next();
};

export default displayImages;
