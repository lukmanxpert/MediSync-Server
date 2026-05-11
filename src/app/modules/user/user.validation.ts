import * as z from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const createDoctorZodSchema = z.object({
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be at most 20 characters long"),
  doctor: z.object({
    name: z
      .string("Name is required")
      .min(5, "Name must be at least 5 characters long")
      .max(30, "Name must be at most 30 characters long"),

    email: z.email("Invalid email format"),

    contactNumber: z
      .string("Contact number is required")
      .min(11, "Contact number must be at least 11 digits long")
      .max(14, "Contact number must be at most 14 digits long"),

    address: z
      .string("Address is required")
      .min(10, "Address must be at least 10 characters long")
      .max(100, "Address must be at most 100 characters long")
      .optional(),

    registrationNumber: z
      .string("Registration number is required")
      .min(5, "Registration number must be at least 5 characters long")
      .max(20, "Registration number must be at most 20 characters long"),

    experience: z
      .int("Experience must be an integer")
      .nonnegative("Experience cannot be negative")
      .optional(),

    gender: z.enum(
      [Gender.MALE, Gender.FEMALE],
      "Gender must be either 'MALE' or 'FEMALE'",
    ),

    appointmentFee: z
      .number("Appointment fee must be a number")
      .nonnegative("Appointment fee cannot be negative"),

    qualification: z
      .string("Qualification is required")
      .min(10, "Qualification must be at least 10 characters long")
      .max(200, "Qualification must be at most 200 characters long"),

    currentWorkingPlace: z
      .string("Current working place is required")
      .min(5, "Current working place must be at least 5 characters long")
      .max(50, "Current working place must be at most 50 characters long"),

    designation: z
      .string("Designation is required")
      .min(2, "Designation must be at least 2 characters long")
      .max(100, "Designation must be at most 100 characters long"),
  }),
  specialties: z
    .array(z.uuid("Each specialty ID must be a valid UUID"))
    .min(1, "At least one specialty is required"),
});
