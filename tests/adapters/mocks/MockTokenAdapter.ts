import TokenAdapter from 'adapters/TokenAdapter/contracts/TokenAdapter';
import { randomBytes } from 'crypto';

export default class MockTokenAdapter implements TokenAdapter {
  encrypt(data: string | object): Promise<string> {
    return new Promise(resolve => resolve(randomBytes(20).toString('hex')));
  }
  decrypt(data: string): Promise<string | object> {
    throw new Error('Method not implemented.');
  }
}
