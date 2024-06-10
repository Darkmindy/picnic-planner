import express from "express";
import { router as authApi } from "./routes/user.routes";



export const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server is online" });
});

app.use("/api/auth/", authApi);
