import express from "express";
import session from "express-session";
import Keycloak from "keycloak-connect";
import { routes } from "./routes";
import swaggerDoc from "./docs/swaggerDoc.json";
import swaggerUi from "swagger-ui-express";
import { protectMiddleware } from "./middlewares/protectMiddleware";
import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();

const memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  }),
);

// const keycloak = new Keycloak({ store: memoryStore }, "./keycloak-config.json");
// app.use(keycloak.middleware());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//app.use("/to-do-crud", protectMiddleware, routes);
app.use("/to-do-crud", routes);

export { app };
