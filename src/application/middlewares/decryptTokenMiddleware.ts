import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const decryptTokenMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Middleware de decodificação iniciado");

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.error("Token ausente ou inválido");
    res.status(401).json({ error: "Token is required" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.decode(token) as any;

    console.log("Token decodificado:", decodedToken);

    if (!decodedToken || !decodedToken.email) {
      console.error("Email não encontrado no token");
      res.status(401).json({ error: "Invalid token: Email not found" });
      return;
    }

    // Adiciona o e-mail diretamente no objeto da requisição
    (req as any).email = decodedToken.email;

    console.log("Email extraído do token:", decodedToken.email);

    next();
  } catch (error) {
    console.error("Erro ao decodificar token:", error);
    res.status(401).json({ error: "Failed to decode token" });
  }
};
