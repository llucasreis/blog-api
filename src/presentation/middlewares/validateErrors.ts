/* eslint-disable @typescript-eslint/no-unused-vars */
import { isCelebrateError } from 'celebrate';
import { NextFunction, Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

interface CelebrateErrors {
  message: string;
}

export default function validateErrors(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
): Response {
  if (isCelebrateError(error)) {
    const celebrateErrors: CelebrateErrors[] = [];

    error.details.forEach(data => {
      data.details.forEach(detail => {
        celebrateErrors.push({ message: detail.message });
      });
    });

    return response
      .status(400)
      .send(celebrateErrors.length > 1 ? celebrateErrors : celebrateErrors[0]);
  }

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
