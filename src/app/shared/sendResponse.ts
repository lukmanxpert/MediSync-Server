import { Response } from "express";

interface IResponseData<T> {
  httpStatusCode: number;
  message: string;
  success: boolean;
  data?: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const sendResponse = <T>(
  res: Response,
  responseData: IResponseData<T>,
) => {
  const { httpStatusCode, message, success, data, meta } = responseData;
  return res.status(httpStatusCode).json({
    message,
    success,
    data,
    meta,
  });
};
