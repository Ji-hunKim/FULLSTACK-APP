const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!22   ");
});

app.use(express.static(path.join(__dirname, "../uploads")));
// 가상경로 지정도 가능
// ex) app.use('/image', express.static('uploads'));

app.listen(port, () => {
  console.log("${port}번에서 실행되었습니다.");
});
