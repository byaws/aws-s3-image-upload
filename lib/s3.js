'use strict';

// require modules
const aws = require('aws-sdk'),
    multerS3 = require('multer-s3');

// require config
const _s3 = new aws.S3({
    apiVersion: 'apiVersion',
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    signatureVersion: 'signatureVersion',
});

/**
 * @method upload
 * @description s3 storage upload
 */
exports.upload = () => {
    return {
        storage: multerS3(
            {
                s3: _s3,
                bucket: 'bucket-name',
                key: (req, file, cb) => {
                    cb(null, file.originalname);
                },
            }
        ),
    };
};
