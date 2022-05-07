const path = require('path');

const express = require('express');

const rootDir = require('../util/path');


const router = express.Router();

router.get('/', (req, res, next) => {
    // join builds the path which is compatible with unix and Windows systems, hence no '/'
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
