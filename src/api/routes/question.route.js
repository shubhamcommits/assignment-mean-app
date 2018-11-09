const express = require('express');

const {
  questions
} = require('../controllers');

const router = express.Router();

router.post('/', questions.add);
router.get('/', questions.get);

module.exports = router;