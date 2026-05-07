/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { envVariables } from "../../config/env";
import status from "http-status";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (envVariables.NODE_ENV === "development") {
    console.error("error from global middleware", err);
  }

  const statusCode: number = status.INTERNAL_SERVER_ERROR;
  const message: string = "Internal Server Error";

  res.status(statusCode).json({
    message: message,
    error: err.message,
    success: false,
  });
};


export default globalErrorHandler;