const express = require("express");
const router = express.Router();
const eventController = require("../controller/event.controller");
const bandController = require("../controller/band.controller");

router.route("/events")
    .get(eventController.eventGetAll)
    .post(eventController.eventAddOne);

router.route("/events/:eventId")
    .get(eventController.eventGetOne)
    .put(eventController.eventUpdateOne)
    .delete(eventController.eventDeleteOne);

router.route("/events/:eventId/bands")
    .get(bandController.bandGetAll)
    .post(bandController.bandAddOne);

router.route("/events/:eventId/bands/:bandId")
    .get(bandController.bandGetOne)
    .put(bandController.bandUpdateOne)
    .delete(bandController.bandDeleteOne);

module.exports = router;