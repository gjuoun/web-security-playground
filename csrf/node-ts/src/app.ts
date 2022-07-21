import cookieParser from "cookie-parser";
import express from "express";

const app = express();

app.use(cookieParser("secret"));

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
