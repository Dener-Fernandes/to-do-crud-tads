import express from "express";
import session from "express-session";
import Keycloak from "keycloak-connect";
import { routes } from "./routes";
import { protectMiddleware } from "./middlewares/protectMiddleware";
import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();

// Configuração de sessões
const memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

// Keycloak
const keycloak = new Keycloak({ store: memoryStore }, "./keycloak-config.json");
app.use(keycloak.middleware());

// JSON Parser
app.use(express.json());

// Protege as rotas com o middleware
app.use("/to-do-crud", protectMiddleware, routes);

export { app };
