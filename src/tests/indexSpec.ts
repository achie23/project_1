import supertest from 'supertest';
import app from '../index';
import imageResizer from '../utilities/imageResizer';
import cacheChecker from '../utilities/cacheChecker';

const request = supertest(app);

describe('Endpoint testing', () => {
  it('should get the root endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('should get the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('should get the resize endpoint', async () => {
    const response = await request.get(
      '/api/resize?name=fjord.jpg&width=300&height=300'
    );
    expect(response.status).toBe(200);
  });
});

describe('imageResizer function test', () => {
  it('should get an image object if image is not in cached folder', async () => {
    const testResult = await imageResizer('fjord.jpg', 300, 350);
    expect(testResult).toEqual(
      jasmine.objectContaining({
        format: 'jpeg',
        width: 300,
        height: 350,
      })
    );
  });
});

describe('cacheChecker function test', () => {
  it('should return true when image name is found in resizedImages folder and the width & height are right', async () => {
    const testResult = await cacheChecker('fjord.jpg', 300, 300);
    expect(testResult).toBe(true);
  });

  it('should return false when width & height are right but image name is not found in resizedImages folder', async () => {
    const testResult = await cacheChecker('test.jpg', 300, 300);
    expect(testResult).toBeFalsy();
  });

  it('should return false when height & width are not right but image name is found in resizedImages folder', async () => {
    const testResult = await cacheChecker('fjord.jpg', 700, 700);
    expect(testResult).toBeFalsy();
  });
});
