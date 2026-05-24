const express = require('express');
const { createLead, getLeads } = require('../controllers/leadController');

const router = express.Router();

router.route('/')
  .get(getLeads)
  .post(createLead);

module.exports = router;
