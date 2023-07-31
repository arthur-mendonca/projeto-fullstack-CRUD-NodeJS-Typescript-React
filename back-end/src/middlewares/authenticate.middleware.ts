import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const authenticationMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ message: "Token not found" });
  }

  const splitedToken = token.split(" ")[1];

  jwt.verify(
    splitedToken,
    process.env.SECRET_KEY!,
    (error: any, decoded: any) => {
      if (error) {
        return response.status(401).json({ message: "Invalid token" });
      }
      console.log(decoded);

      response.locals.clientId = decoded.sub;
      response.locals.admin = decoded.admin;

      return next();
    }
  );
};

export { authenticationMiddleware };
