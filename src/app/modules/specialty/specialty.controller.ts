/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await SpecialtyService.createSpecialty(payload);

    return res.status(201).json({
      message: "Specialty created successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create specialty.",
      success: false,
      error: error.message,
    });
  }
};

const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const specialties = await SpecialtyService.getAllSpecialties();

    return res.status(200).json({
      message: "Specialty fetches successfully",
      success: true,
      data: specialties,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to get specialties.",
      success: false,
      error: error.message,
    });
  }
};

const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SpecialtyService.deleteSpecialty(id as string);

    return res.status(200).json({
      message: "Specialty delete successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to delete specialty.",
      success: false,
      error: error.message,
    });
  }
};

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
};
