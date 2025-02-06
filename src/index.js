import express, { json, urlencoded } from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";

dotenv.config();

const app = express();
app.use(json())
// Middlewares
const corsOption = {
    origin: ["http://localhost:3001"],
    Credential: true,
}
app.use(cors(corsOption));
// app.use(json({ limit: "100mb" }));
app.use(urlencoded({ limit: "100mb", extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000*60,
    }
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes

// Listen app
const PORT = process.env.PORT || 7002;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});