import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { Application } from "express";
import { handleErrors } from "./errors";
import { clientsRoutes } from "./routes/clients.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app: Application = express();

app.use(express.json());
app.use("/clients", clientsRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
