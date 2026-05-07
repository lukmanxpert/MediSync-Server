import status from "http-status";
import { Request, Response } from "express";

export const notFound = (req: Request, res: Response) => {
  res.status(status.NOT_FOUND).json({
    message: `Route ${req.originalUrl} not found`,
    success: false,
  });
};
