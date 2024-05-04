const subscriberModel = require("../models/subscribers");
const mongoose = require("mongoose");

const getSubscribersController = async (req, res) => {
  try {
    const subs = await subscriberModel.find();
    if (subs.length) {
      return res.status(200).send({
        statue: true,
        message: "Subscribers found successfully.",
        data: subs,
      });
    } else {
      return res.status(404).send({
        statue: true,
        message: "No subscribers were found.",
      });
    }
  } catch (error) {
    return res.status(500).send({
      statue: false,
      message: `Error in getSubscribersController API: ${error}`,
      error,
    });
  }
};
const getSubscriberNamesController = async (req, res) => {
  try {
    const subs = await subscriberModel
      .find()
      .select({ name: 1, subscribedChannel: 1, _id: 0 });
    if (subs.length) {
      return res.status(200).send({
        statue: true,
        message: "All Subscriber Names found successfully.",
        data: subs,
      });
    } else {
      return res.status(404).send({
        statue: false,
        message: "No subscribers were found.",
      });
    }
  } catch (error) {
    return res.status(500).send({
      statue: false,
      message: `Error in getSubscriberNamesController API: ${error}`,
      error,
    });
  }
};
const getSingleSubscriberController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        statue: false,
        message: "Invalid Id, Please use valid Id",
      });
    }
    const subscriber = await subscriberModel.findById(id);
    if (subscriber) {
      return res.status(200).send({
        statue: true,
        message: "Subscriber found successfully.",
        data: subscriber,
      });
    } else {
      return res.status(404).send({
        statue: false,
        message: "Subscriber not found.",
      });
    }
  } catch (error) {
    return res.status(500).send({
      statue: false,
      message: `Error in getSingleSubscriberController API: ${error}`,
      error,
    });
  }
};

module.exports = {
  getSubscribersController,
  getSubscriberNamesController,
  getSingleSubscriberController,
};
