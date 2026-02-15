const express = require("express");
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register for event
router.post("/:eventId", protect, async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const alreadyRegistered = await Registration.findOne({
      user: req.user._id,
      event: eventId,
    });

    if (alreadyRegistered) {
      return res.status(400).json({ message: "Already registered" });
    }

    const registrationCount = await Registration.countDocuments({
      event: eventId,
    });

    if (registrationCount >= event.capacity) {
      return res.status(400).json({ message: "Event is full" });
    }

    const registration = await Registration.create({
      user: req.user._id,
      event: eventId,
    });

    res.status(201).json({
      message: "Registration successful",
      registration,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get logged-in user's registered events
router.get("/my-events", protect, async (req, res) => {
  try {
    const registrations = await Registration.find({
      user: req.user._id,
    }).populate("event");

    const events = registrations.map((reg) => reg.event);

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
