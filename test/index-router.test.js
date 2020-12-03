
const request = require('supertest');
const app = require('../server.js');

describe('GET /', () => {
    test('Index page, should return 200', async () => {
        const response = await request(app).post('/api/auth/login').send({
            username: 'test',
            password: 'testtest123'
        });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});

describe('GET Topics', () => {
    test('GET Topics, should return status 200 and Json', async () => {
        const response = await request(app).get('/api/topics');
        expect(response.statusCode).toBe(200);
        expect(response.body.topics[0]).toHaveProperty('name');
    });
});

describe('GET News', () => {
    test('GET News, should return status 200 and Json', async () => {
        const response = await request(app).get('/api/news');
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty('title');
        expect(response.body[0]).toHaveProperty('text');
        expect(response.body[0]).toHaveProperty('topics');
        expect(response.body[0]).toHaveProperty('author');
    });
});

describe('GET Authors', () => {
    test('GET Authors, should return status 200 and Json', async () => {
        const response = await request(app).get('/api/authors');
        expect(response.statusCode).toBe(200);
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('surname');
        expect(response.body[0]).toHaveProperty('username');
        expect(response.body[0]).toHaveProperty('email');
    });
});