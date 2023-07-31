import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const verifyAdminMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const admin = response.locals.admin;

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { verifyAdminMiddleware };
