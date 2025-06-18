// file: test/route.test.ts
import { GET } from '../src/app/api/linkedin/kill/route';
import { LightsailClient, StopInstanceCommand } from '@aws-sdk/client-lightsail';
import jwt from 'jsonwebtoken';

jest.mock('@aws-sdk/client-lightsail');
jest.mock('jsonwebtoken');

const mockSend = jest.fn();

beforeAll(() => {
  process.env.JWT_SECRET = 'test-secret';
  // Mock LightsailClient so that new LightsailClient() has .send = mockSend
  (LightsailClient as unknown as jest.Mock).mockImplementation(() => ({
    send: mockSend,
  }));
});

describe('Minimal test for stop-instance route', () => {
  it('returns 200 when JWT is valid and Lightsail stop succeeds', async () => {
    const fakeToken = 'valid.jwt.token';
    (jwt.verify as jest.Mock).mockReturnValue({ instance_name: 'test-instance' });

    // Mock the Lightsail stop response
    mockSend.mockResolvedValueOnce({}); // could be any object

    const req = new Request('http://localhost/api/stop-instance', {
      headers: { Authorization: `Bearer ${fakeToken}` },
    });
    const res = await GET(req);

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.message).toMatch(/Stop command sent/);
  });
});
