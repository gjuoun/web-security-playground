import cookieParser from "cookie-parser";
import express, { ErrorRequestHandler } from "express";
import fs from "fs";
import path from "path";

const app = express();

app.use(cookieParser("secret"));

app.get("/error", (req, res) => {
  throw new Error("Error occurred");
  res.send("hey");
});

app.get("/error-async", (req, res, next) => {
  fs.readFile(path.join(__dirname, "123.text"), (err, data) => {
    if (err) {
      next(err);
    }
    res.send(data);
  });
});

app.get("/get-cookie", (req, res) => {
  res.cookie("X-Jun-Cookie", "12345", {
    secure: true,
    httpOnly: true,
    sameSite: "strict",
    signed: true,
  });
  res.cookie("X-Jun-Cookie-Public", "12345", {
    sameSite: "strict",
  });
  res.send("Cookie set");
});

app.get("/", (req, res) => {
  console.log("cookies", req.cookies);
  console.log("signed cookies", req.signedCookies);
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
