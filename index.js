const express = require("express");
const { connection } = require("./db");
const { ChatRouter } = require("./Routes/MessRoute");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home_Page");
});

app.use("/mess", ChatRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("server 8080");
  } catch (error) {
    console.log(error);
  }

  console.log("8080");
});
