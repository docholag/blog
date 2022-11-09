const express = require('express');
const router = express.Router();

//cấu hình
const newsController = require('../app/controllers/newsController');

//newsController.index
router.get('/:slug', newsController.show);
router.get('/', newsController.index);
//bóc tách ra nên phải export
module.exports = router;
