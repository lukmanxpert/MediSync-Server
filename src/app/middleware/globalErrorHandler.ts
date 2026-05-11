/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { envVariables } from "../config/env";
import status from "http-status";
import * as zod from "zod";
import { IErrorSources, TErrorResponse } from "../interfaces/error.interface";
import { handleZodError } from "../errorHelpers/handleZodError";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("err from global :>> ", err);
  if (envVariables.NODE_ENV === "development") {
    console.error("error from global middleware", err);
  }

  let errorSources: IErrorSources[] = [];

  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message: string = "Internal Server Error";

  if (err instanceof zod.ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode as number;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
  }

  const errorResponse: TErrorResponse = {
    success: false,
    message,
    errorSources,
    error: envVariables.NODE_ENV === "development" ? err : undefined,
  };

  res.status(statusCode).json(errorResponse);
};

export default globalErrorHandler;
