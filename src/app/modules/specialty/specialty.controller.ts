import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await SpecialtyService.createSpecialty(payload);

  return res.status(201).json({
    message: "Specialty created successfully",
    success: true,
    data: result,
  });
};

export const SpecialtyController = { createSpecialty };
