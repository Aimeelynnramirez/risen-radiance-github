const express = require('express');
const router = express.Router();

// @route   GET api/data/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }));

module.exports = router;
