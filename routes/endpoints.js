const router = require("express").Router();

const message = require("../contrallers/msg")
router.post("/insert", message.addConversation);

module.exports = router;