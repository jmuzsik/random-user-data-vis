import { Injectable } from '@angular/core';

@Injectable()
export class UploadFileService {
  constructor() {}

  uploadfile(file) {
    fetch(
      'https://0p14mpby70.execute-api.us-east-1.amazonaws.com/dev/mrbucket-3/editme.json',
      {
        method: 'put',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: file
      }
    )
      .then(response => {
        fetch(
          'https://f15t14u2u4.execute-api.us-east-1.amazonaws.com/default/turnFileIntoTxt'
        )
          .then(_ => {
            console.log('All was successful.');
          })
          .catch(e =>
            console.log('error in calling lambda to create other files', e)
          );
      })
      .catch(e => console.log('error in initial adding of file', e));
  }
}
