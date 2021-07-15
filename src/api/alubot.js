const router = require('express').Router();

router.get('/', (req, res) => {
  // Get body from request
  const requestBody = req.body;

  console.log(requestBody);
  return res.json(requestBody);
})

module.exports = router;
