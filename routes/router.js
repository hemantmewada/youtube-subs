const express = require("express");
const {
  getSubscribersController,
  getSubscriberNamesController,
  getSingleSubscriberController,
} = require("../controllers/controller");

const router = express.Router();

router.get("/subscribers", getSubscribersController);
router.get("/subscribers/names", getSubscriberNamesController);
router.get("/subscribers/:id", getSingleSubscriberController);

module.exports = router;
