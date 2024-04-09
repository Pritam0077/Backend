import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware is something kind of checking that happens between requestand response
// use method is used for all midddlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
// used to remove spaces between url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// use to keep files in public folder
app.use(express.static("public"));
// use to manage cookies in users browser
app.use(cookieParser());

export { app };
