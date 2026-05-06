import { Response } from "express";

interface IResponseData<T> {
  httpStatusCode: number;
  message: string;
  success: boolean;
  data?: T;
}

export const sendResponse = <T>(
  res: Response,
  responseData: IResponseData<T>,
) => {
  const { httpStatusCode, message, success, data } = responseData;
  return res.status(httpStatusCode).json({
    message,
    success,
    data,
  });
};
