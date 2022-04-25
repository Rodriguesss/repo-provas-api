import { Request, Response, NextFunction } from 'express';
import { ObjectError } from '../types/error.type';

const ERROR_ENUM: { [x: string]: number } = {
  "not_found": 404,
  "bad_request": 400,
  "unprocessable_entity": 422,
  "not_authorized": 401,
}

export function errorHandler(error: ObjectError, req: Request, res: Response, next: NextFunction) {
  let { message, type } = error;
  const SERVER_ERROR = 500;

  if (message === undefined) message = "Server error.";

  const STATUS_CODE = ERROR_ENUM[type] || SERVER_ERROR;

  return res.status(STATUS_CODE).json({ message });
}