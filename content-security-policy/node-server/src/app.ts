import express from "express";

const app = express();

app.use(
  "/static",
  (req, res, next) => {
    // res.set("Content-Security-Policy", "default-src 'self'");
    next();
  },
  express.static("public")
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
