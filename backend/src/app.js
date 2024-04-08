import express from "express";
import authRouter from "./routers/auth";
import cors from "cors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import morgan from "morgan";
import productRouter from "../src/routers/product";
import categoryRouter from "../src/routers/category";
import cartRouter from "../src/routers/cart"
import orderRouter from "../src/routers/order"
const app = express();
dotenv.config();
//middlewere
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
//connect db
connectDB(process.env.DB_URI);

//routers
app.use("/api/v1", authRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1",cartRouter);
app.use("/api/v1", orderRouter);
export const viteNodeApp = app;
