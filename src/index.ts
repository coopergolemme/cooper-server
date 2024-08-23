// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Project from "../models";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/projects", async (req, res) => {
  const allProjects = await Project.find();
  return res.status(200).json(allProjects);
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    app.listen(process.env.PORT, () =>
      console.log("Server started on port 3000")
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
