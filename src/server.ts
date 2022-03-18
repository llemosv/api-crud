import "reflect-metadata";

import express from "express";
import "express-async-errors";
import { router } from "./routes/routes";

import "./database";

import "./shared/container";

const port = 3333;
const app = express();

app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}.`));
