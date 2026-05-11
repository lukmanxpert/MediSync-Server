import { NextFunction, Request, Response } from "express";
import * as z from "zod";

export const validateRequest = (schema: z.ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsedData = schema.safeParse(req.body);
    if (!parsedData.success) {
      next(parsedData.error);
    }
    // sanitizing the data
    req.body = parsedData.data;
    next();
  };
};
