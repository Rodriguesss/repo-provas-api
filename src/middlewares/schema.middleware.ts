import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export const validationSchema = (schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) throw { type: 'unprocessable_entity', message: error.message };

    next()
  }
}