import { prisma } from "../../lib/prisma";

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

export const DoctorService = { getAllDoctors };
