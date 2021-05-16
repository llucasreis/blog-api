import HashAdapter from '../../../src/adapters/HashAdapter/contracts/HashAdapter';

export default class MockHashAdapter implements HashAdapter {
  generateHash(payload: string): Promise<string> {
    return new Promise(resolve => resolve(payload));
  }
  compareHash(payload: string, hashed: string): Promise<boolean> {
    return new Promise(resolve => resolve(payload === hashed));
  }
}
