const express = require('express');
const router = express.Router();

//cấu hình
const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index);
//bóc tách ra nên phải export
module.exports = router;
