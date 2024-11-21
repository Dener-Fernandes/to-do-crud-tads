import express from "express";
import session from "express-session";
import Keycloak from "keycloak-connect";
// import { routes } from "./routes";

import "reflect-metadata";

import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "./.env" });

// Configuração do gerenciamento de sessões
const memoryStore = new session.MemoryStore();

app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  }),
);

// Configuração do Keycloak
import keycloakConfig from "./keycloak-config.json";
const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

// Middleware do Keycloak
app.use(keycloak.middleware());

app.use(express.json());

// app.use("/to-do-crud", routes);

export { app };
