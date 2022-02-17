const express = require("express");
const {
  newToken,
  getToken,
  updateToken,
} = require("../controllers/token.controller");
const router = express.Router();

//new token
router.post("/", async (req, res) => {
  try {
    const { meter_num, money } = req.body;
    const { token } = await newToken(meter_num, money);
    res.send({ token, msg: "success" });
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

//get token
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { token } = await getToken(id);
    res.send({ token });
  } catch (err) {
    res.status(400).send({ message: err });
  }

  //update status
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { msg } = await updateToken(id);
      res.send(msg);
    } catch (err) {
      res.status(400).send({ message: err });
    }
  });
});

module.exports = router;
