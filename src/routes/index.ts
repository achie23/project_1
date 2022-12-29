// import dependencies
import express from 'express';
import resize from './api/resize';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send(
    `<p style='color: red; font-size: 16px'>No image name given.</p>
    <p>Please enter url as:</p>
    <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>`
  );
});

routes.use('/resize', resize);

export default routes;
