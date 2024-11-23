import { Request, Response, NextFunction } from "express";
import Keycloak from "keycloak-connect";

const keycloak = new Keycloak({}, "./keycloak-config.json");

export const protectMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "Token is required" });
    return;
  }

  keycloak.protect()(req, res, (err) => {
    if (err) {
      res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
      return; 
    }
    next();
  });
};
