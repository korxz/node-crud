const express = require('express')
const router = express.Router();

describe('Index Router', () => {
    test('Index page, should return 200', async () => {
        const res = await router.get('/').
        expect(res.status).toHaveBeenCalledWith(200);
    })
})