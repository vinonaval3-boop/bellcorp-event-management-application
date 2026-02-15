const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// Get All Events (with Search & Filter)
router.get("/", async (req, res) => {
  try {
    const { search, category, location } = req.query;
    let query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    if (location) {
      query.location = location;
    }

    const events = await Event.find(query);

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Event
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
