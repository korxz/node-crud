
const request = require('supertest');
const app = require('../server.js');

describe('GET /', () => {
    test('Index page, should return 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('GET Topics', () => {
    test('GET Topics, should return status 200 and Json', async () => {
        const response = await request(app).get('/topics');
        expect(response.statusCode).toBe(200);
        expect(response.body.topics[0]).toHaveProperty('name');
    });
});

describe('GET News', () => {
    test('GET News, should return status 200 and Json', async () => {
        const response = await request(app).get('/news');
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty('title');
        expect(response.body[0]).toHaveProperty('text');
        expect(response.body[0]).toHaveProperty('topics');
        expect(response.body[0]).toHaveProperty('author');
    });
});

describe('GET Authors', () => {
    test('GET Authors, should return status 200 and Json', async () => {
        const response = await request(app).get('/authors');
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('surname');
        expect(response.body[0]).toHaveProperty('username');
        expect(response.body[0]).toHaveProperty('email');
    });
});