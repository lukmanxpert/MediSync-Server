import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";
interface IRegisterPatientPayload {
  name: string;
  email: string;
  password: string;
}

const registerPatient = async (payload: IRegisterPatientPayload) => {
  const { name, email, password } = payload;
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });
  if (!data.user) {
    throw new Error("Failed to register patient");
  }

  //   todo: Create patient profile In transaction after sign up of patient in User model
  //   const patient = await prisma.$transaction(async (prisma) => {
  //     const user = await prisma.user.update({
  //       where: {

  return data;
};

interface ILoginUserPayload {
  email: string;
  password: string;
}

const loginUser = async (payload: ILoginUserPayload) => {
  const { email, password } = payload;
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
  if (!data.user) {
    throw new Error("Failed to login user");
  }
  if (data.user.status === UserStatus.BLOCKED) {
    throw new Error("Your account has been blocked");
  }
  if (data.user.isDeleted || data.user.status === UserStatus.DELETED) {
    throw new Error("Your account has been deleted");
  }
  return data;
};

export const AuthService = {
  registerPatient,
  loginUser,
};
