// import dependencies
import express from 'express';
import displayImages from '../../utilities/displayImage';

const resize = express.Router();

resize.get(
  '/',
  displayImages,
  (req: express.Request, res: express.Response) => {
    res.end();
  }
);

export default resize;
