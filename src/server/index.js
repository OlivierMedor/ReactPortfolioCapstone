const express = require("express");
const availableTimes = require("./db.json");

const app = express();

const PORT = 3001;

app.get("/api/availableTimes", (req, res) => {
  return res.json(availableTimes);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));