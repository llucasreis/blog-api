import { hash, compare } from 'bcryptjs';

import HashAdapter from '../contracts/HashAdapter';

export default class BCryptHashAdapter implements HashAdapter {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
