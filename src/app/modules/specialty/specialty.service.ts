import { specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: specialty): Promise<specialty> => {
  const specialty = await prisma.specialty.create({
    data: payload,
  });
  return specialty;
};

export const SpecialtyService = { createSpecialty };
