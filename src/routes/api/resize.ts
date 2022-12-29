// import dependencies
import express from 'express';
import displayImages from '../../utilities/displayImage';

const resize = express.Router();

resize.get(
  '/',
  displayImages,
  (req: express.Request, res: express.Response) => {
    // res.send(
    //   `<p style='color: red; font-size: 16px'>No image name given.</p>
    //   <p>Please enter url as follows:</p>
    //   <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>`
    // );
    res.end();
  }
);

export default resize;
