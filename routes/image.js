'use strict';

// require modules
const router = require('express').Router(),
    multer = require('multer'),
    s3 = require('../lib/s3'),
    upload = multer(s3.upload());

/**
 * @url BASE_URL/images/
 * @type POST
 * @description 이미지 입로드
 * @param {(body) file} [img] 이미지 파일
 * */
router.post('/', upload.single('file'), (req, res, next) => {
    try {
        res.status(201).json({ 'url': `https:.../${req.file.originalname}` });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
