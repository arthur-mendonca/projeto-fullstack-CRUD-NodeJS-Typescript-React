import express from "express";

import { Router } from "express";

const app = express();

const route = Router();

app.use(express.json());

app.use(route);

app.listen(3000, () => console.log("server running on port 3000"));
