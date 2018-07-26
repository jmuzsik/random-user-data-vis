import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

const bucket = new S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

@Injectable()
export class UploadFileService {
  constructor() {}

  uploadfile(file) {
    const params = {
      Bucket: 'mrbucket-3',
      Key: 'editme.json',
      Body: file
    };

    bucket.upload(params, function(err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      return true;
    });
  }
}
