import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.registerPatient(payload);
  sendResponse(res, {
    httpStatusCode: status.CREATED,
    message: "Patient registered successfully",
    success: true,
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.loginUser(payload);
  sendResponse(res, {
    httpStatusCode: status.OK,
    message: "User logged in successfully",
    success: true,
    data: result,
  });
});

export const AuthController = {
  registerPatient,
  loginUser,
};
