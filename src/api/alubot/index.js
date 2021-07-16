const router = require('express').Router();
const discordController = require('./controllers/discordController');

router.post('/', discordController.sendMessagesToChannel);

module.exports = router;
