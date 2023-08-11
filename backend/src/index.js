const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 4000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!22   ");
});

app.use("/users", require("./routes/users"));

app.use(express.static(path.join(__dirname, "../uploads")));
// 가상경로 지정도 가능
// ex) app.use('/image', express.static('uploads'));

app.listen(port, () => {
  console.log("${port}번에서 실행되었습니다.");
});

