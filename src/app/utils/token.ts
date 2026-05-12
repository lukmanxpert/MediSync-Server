import { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "./jwt";
import { envVariables } from "../config/env";

const getAccessToken = (payload: JwtPayload) => {
  const accessToken = jwtUtils.createToken(
    payload,
    envVariables.ACCESS_TOKEN_SECRET,
    { expiresIn: envVariables.ACCESS_TOKEN_EXPIRES_IN } as SignOptions,
  );
  return accessToken;
};

const getRefreshToken = (payload: JwtPayload) => {
  const refreshToken = jwtUtils.createToken(
    payload,
    envVariables.REFRESH_TOKEN_SECRET,
    { expiresIn: envVariables.REFRESH_TOKEN_EXPIRES_IN } as SignOptions,
  );
  return refreshToken;
};

export const tokenUtils = {
  getAccessToken,
  getRefreshToken,
};
