import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable()
export class GetFileService {
  constructor() {}

  getFile(type) {
    if (type === 'text') {
      fetch(
        'https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/user-data.txt',
        {
          method: 'get',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }
      )
        .then(res => res.text())
        .then(str => {
          const blob = new Blob([str], {
            type: 'text/plain'
          });
          FileSaver.saveAs(blob, 'edited-file.txt');
        })
        .catch(console.log);
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
      )
        .then(response => {
          return response.json();
        })
        .then(res => {
          const blob = new Blob([JSON.stringify(res)], {
            type: 'application/octet-stream'
          });
          FileSaver.saveAs(blob, 'edited-file.json');
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
        return response.text();
      }).then(res => {
        console.log(res)
        const blob = new Blob([res], {
          type: 'application/octet-stream'
        });
        FileSaver.saveAs(blob, 'edited-file.xml');
      });
    }
  }
}
