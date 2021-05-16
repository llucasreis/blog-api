import authConfig from '@main/config/auth';
import { sign, verify } from 'jsonwebtoken';

import TokenAdapter from '../contracts/TokenAdapter';

export default class JWTTokenAdapter implements TokenAdapter {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor() {
    this.secret = authConfig.jwt.secret;
    this.expiresIn = authConfig.jwt.expiresIn;
  }

  async encrypt(data: string | object): Promise<string> {
    return sign(data, this.secret, { expiresIn: this.expiresIn });
  }

  async decrypt(data: string): Promise<string | object> {
    return verify(data, this.secret);
  }
}
