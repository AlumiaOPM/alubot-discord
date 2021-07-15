const express = require('express');

const alubot = require('./alubot');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API'
  });
});

router.use('/alubot', alubot);

module.exports = router;
