import supertest from 'supertest';
import app from '../index';
import imageResizer from '../utilities/imageResizer';
import cacheChecker from '../utilities/cacheChecker';

const request = supertest(app);

describe('Endpoint testing', () => {
  it('should get the root endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    // done();
  });

  it('should get the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    // done();
  });

  it('should get the resize endpoint', async () => {
    const response = await request.get(
      '/api/resize?name=fjord.jpg&width=300&height=300'
    );
    expect(response.status).toBe(200);
    // done();
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
  it('should return true when image is found in cached folder and the width & height are right', async () => {
    const testResult = await cacheChecker('fjord.jpg', 300, 300);
    expect(testResult).toBe(true);
  });

  it('should return false when width & height are not right but image is found in cached folder', async () => {
    const testResult = await cacheChecker('fjord.jpg', 150, 200);
    expect(testResult).toBe(false);
  });

  it('should return false when width & height are right but image is not found in cached folder', async () => {
    const testResult = await cacheChecker('imageNotFound.jpg', 300, 300);
    expect(testResult).toBe(false);
  });

  it('should return false when height is not right but image is found in cached folder', async () => {
    const testResult = await cacheChecker('fjord.jpg', 300, 200);
    expect(testResult).toBe(false);
  });

  it('should return false when width is not right but image is found in cached folder', async () => {
    const testResult = await cacheChecker('fjord.jpg', 150, 300);
    expect(testResult).toBe(false);
  });
});
