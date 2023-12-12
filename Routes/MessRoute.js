const express = require("express");
const { ChatModel } = require("../Model/MessModel");

const ChatRouter = express.Router();

ChatRouter.get("/", async (req, res) => {
  const datas = await ChatModel.find();
  res.status(200).send({ datas });
});

ChatRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const data = new ChatModel(payload);
    await data.save();
    res.send({ msg: "create data add" });
  } catch (error) {
    res.send({ msg: "something wrong", error: error.message });
  }
});

module.exports = { ChatRouter };
