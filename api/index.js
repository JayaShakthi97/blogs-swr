const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const port = 8000;

app.get("/test", (_, res) => {
  return res.json({ status: "backend is working" });
});

app.use("/images", express.static("images"));

app.get("/api/planets", (_, res) => {
  const rawdata = fs.readFileSync("./mock-data/list.json");
  return res.json(JSON.parse(rawdata));
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
