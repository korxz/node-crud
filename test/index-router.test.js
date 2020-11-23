
const request = require("supertest");
const app = require('../server');

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })
/*
describe('Index Router', () => {
    test('Index page, should return 200', async () => {
        const res = await router.get('/');
        expect(res.status).toHaveBeenCalledWith(200);
    })
})

describe('Get topics', () => {
    test('Get topics, should return 200 and json', async () => {
        const res = await router.get('/topics')
        .expect(res.status).toHaveBeenCalledWith(200)
        .expect(res).toHaveProperty('name');
    })
})
*/