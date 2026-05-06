/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        message: error.message || "Something went wrong",
        success: false,
        error: error.message,
      });
    }
  };
};

export default catchAsync;
