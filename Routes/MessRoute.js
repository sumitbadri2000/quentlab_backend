const express = require("express");
const { MessModel } = require("../Model/MessModel");

const MessRouter = express.Router();

MessRouter.get("/", async (req, res) => {
  const datas = await MessModel.find();
  res.send({ datas });
});

MessRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const data = new MessModel(payload);
    await data.save();
    res.send({ msg: "create data add" });
  } catch (error) {
    res.send({ msg: "something wrong", error: error.message });
  }
});

module.exports = { MessRouter };
