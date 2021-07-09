import request from 'supertest'
import { app, server } from './app'

describe('GET /invalid-url', () => {
  test('should return 404', async () => {
    const response = await request(app).get('/invalid-url')
    expect(response.statusCode).toBe(404)
    server.close()
  })
})
