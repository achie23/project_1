// import dependencies
import express from 'express';
import routes from './routes/index';

// create app object and port
const app = express();
const port = 3000;

// define a route handler for the default homepage
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(
    `<p style='color: blue; font-size: 16px'>Please enter url as follows:</p>
    <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>`
  );
});

app.use('/api', routes);

// start the express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
