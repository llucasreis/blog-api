import TokenAdapterFactory from '@main/factories/adapters/TokenAdapterFactory';
import AppError from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';

interface TokenPayload {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

export default async function ensureAutheticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token não encontrado', 401);
  }

  try {
    // for Bearer or just simple Authorization
    const splittedHeader = authHeader.split(' ');

    const token = splittedHeader.length > 1 ? splittedHeader[1] : authHeader;

    const decoded = (await TokenAdapterFactory().decrypt(token)) as object;

    const { id, email } = decoded as TokenPayload;

    if (id && email) {
      request.user = {
        id,
        email,
      };

      return next();
    }
    throw new AppError('Token expirado ou inválido', 401);
  } catch (err) {
    throw new AppError('Token expirado ou inválido', 401);
  }
}
