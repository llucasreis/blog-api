import authConfig from '@main/config/auth';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';

interface TokenPayload {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

export default function ensureAutheticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token não encontrado', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { id, email } = decoded as TokenPayload;

    request.user = {
      id,
      email,
    };

    return next();
  } catch (err) {
    throw new AppError('Token expirado ou inválido', 401);
  }
}
