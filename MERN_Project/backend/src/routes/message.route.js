const express = require("express");
const {protectRoute} = require("../middleware/auth.middleware.js");
const { getUserForSidebar, getMessage, sendMessage } = require("../controller/massage.controller.js");

const router = express.Router();

router.get("/users",protectRoute, getUserForSidebar);
router.get("/:id",protectRoute, getMessage);

router.post("/send/:id", protectRoute, sendMessage)

module.exports = router;