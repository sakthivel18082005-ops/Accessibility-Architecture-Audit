
const request = require('supertest');
const app = require('../src/server');

describe('Services API', () => {
  test('GET /api/services should return all four services', async () => {
    const response = await request(app).get('/api/services');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(4);
  });

  test('Each service should contain required fields', async () => {
    const response = await request(app).get('/api/services');

    expect(response.statusCode).toBe(200);

    response.body.forEach((service) => {
      expect(service).toHaveProperty('id');
      expect(service).toHaveProperty('name');
      expect(service).toHaveProperty('category');
      expect(service).toHaveProperty('description');
    });
  });
});
