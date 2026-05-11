import { prisma } from "../../lib/prisma";
// import { IUpdateDoctorPayload } from "./doctor.interface";

const getAllDoctors = async () => {
  // Logic to get all doctors
  const doctors = await prisma.doctor.findMany({
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  return doctors;
};

// const getDoctorById = async (id: string) => {};

// const updateDoctor = async (id: string, payload: IUpdateDoctorPayload) => {};

// const deleteDoctor = async (id: string) => {};  // soft delete by setting isDeleted to true

export const DoctorService = {
  getAllDoctors,
//   getDoctorById,
//   updateDoctor,
//   deleteDoctor,
};
