## Project_1: Image Processing API
Build an Image Processing API is a project that uses Nodejs, express, nodemon and sharp to build an API to resize jpg images.

## Instructions
- Install Dependencies and Devdependencies via terminal.
```
npm install/i package-name (npm install/i package-name --save-dev)
```

- Run prettier script using
```npm run prettier
```

- Run linting script using
```npm run lint
```
- Run build & jasmine script using
```npm run test
```

- Run the server via terminal using
```
npm run start OR node build/.
```

## API Endpoint
- Write the endpoint url with default port number (3000) as:
http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}

Example:
```
http://localhost:3000/api/resize?name=fjord.jpg&width=300&height=300
```
- Image must be a jpg image.
- The images to be resized should be in the images/full directory.
- The resized image will be stored in the images/resizedImages directory.
- The resized image should have the name {width}x{height}image-name.jpg. 
- For example, if the image name was `fjord.jpg`, `width = 400` & `height = 300` was resized,
- The resized image name will be stored as `400x300fjord.jpg`.