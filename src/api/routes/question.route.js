const express = require('express');

const {
  questions
} = require('../controllers');

const router = express.Router();

router.post('/', questions.add);

module.exports = router;