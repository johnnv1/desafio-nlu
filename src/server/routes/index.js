const router = require('express').Router();
router.post('/nlu/', require('./nlu'));

module.exports = router;
