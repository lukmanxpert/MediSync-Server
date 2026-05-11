import z from "zod";
import { IErrorSources, TErrorResponse } from "../interfaces/error.interface";
import status from "http-status";

export const handleZodError = (error: z.ZodError): TErrorResponse => {
  const statusCode = status.BAD_REQUEST;
  const message = "Zod Validation Error";
  const errorSources: IErrorSources[] = [];

  error.issues.forEach((issue) => {
    errorSources.push({
      path: issue.path.join(".") || "Unknown",
      message: issue.message,
    });
  });
  return {
    success: false,
    message,
    errorSources,
    statusCode,
  };
};
