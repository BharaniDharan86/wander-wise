import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

import app from "../server/app.js";

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on process.env.PORT ${process.env.PORT}!`)
);
