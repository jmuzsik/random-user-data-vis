import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import * as FileSaver from 'file-saver';

const bucket = new S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

const params = {
  Bucket: 'mrbucket-3',
  Key: 'user-data.txt'
};
@Injectable()
export class GetFileService {
  constructor() {}

  getFile() {
    bucket.getObject(params, function(err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
      } else {
        const blob = new Blob([data.Body], {
          type: 'application/octet-stream'
        });
        FileSaver.saveAs(blob, 'edited-file.txt');
        return data;
      }
    });
    params.Key = 'user-data.json';
    bucket.getObject(params, function(err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
      } else {
        const blob = new Blob([data.Body], {
          type: 'application/octet-stream'
        });
        FileSaver.saveAs(blob, 'edited-file.json');
        return true;
      }
    });
    params.Key = 'user-data.xml';
    bucket.getObject(params, function(err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
      } else {
        const blob = new Blob([data.Body], {
          type: 'application/octet-stream'
        });
        FileSaver.saveAs(blob, 'edited-file.xml');
        return true;
      }
    });
  }
}
