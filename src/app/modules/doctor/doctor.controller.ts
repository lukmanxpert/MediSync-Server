import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import status from "http-status";
import { DoctorService } from "./doctor.service";
import { sendResponse } from "../../shared/sendResponse";

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getAllDoctors();
  sendResponse(res, {
    httpStatusCode: status.OK,
    message: "Doctors retrieved successfully",
    success: true,
    data: result,
  });
});

// const getDoctorById = catchAsync(async (req: Request, res: Response) => {});

// const updateDoctor = catchAsync(async (req: Request, res: Response) => {});

// const deleteDoctor = catchAsync(async (req: Request, res: Response) => {});

export const DoctorController = {
  getAllDoctors,
//   getDoctorById,
//   updateDoctor,
//   deleteDoctor,
};
