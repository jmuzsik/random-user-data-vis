import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable()
export class GetFileService {
  constructor() {}

  getFile(type) {
    if (type === 'txt') {
      fetch(
        'https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/user-data.txt',
        {
          method: 'get',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }
      ).then(response => {
        console.log(response, response.body);
        const blob = new Blob([response.body], {
          type: 'application/octet-stream'
        });
        FileSaver.saveAs(blob, 'edited-file.txt');
      });
    } else if (type === 'json') {
      fetch(
        'https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/user-data.json',
        {
          method: 'get',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }
      ).then(response => {
        const blob = new Blob([response.body], {
          type: 'application/octet-stream'
        });
        FileSaver.saveAs(blob, 'edited-file.txt');
      });
    } else {
      fetch(
        'https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/user-data.xml',
        {
          method: 'get',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }
      ).then(response => {
        const blob = new Blob([response.body], {
          type: 'application/octet-stream'
        });
        FileSaver.saveAs(blob, 'edited-file.txt');
      });
    }
  }
}
