'use strict';

const express = require('express');
const router = express.Router();

router.get('/diamondCount', (req, res) => {
  const data = {
      "diamonds": 1500
  };

  res.send(data);
});

module.exports = router;