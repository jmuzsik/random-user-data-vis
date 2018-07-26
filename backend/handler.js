'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const fs = require('fs');
var js2xmlparser = require('js2xmlparser');

const createChartData = require('./utils').createChartData;
const createTextFile = require('./utils').createTextFile;
const createJSONObj = require('./utils').createJSONObj;

module.exports.alterFile = (event, context, callback) => {
  const params = {
    Bucket: 'mrbucket-3',
    Key: 'editme.json'
  };
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Well, hello there!',
      input: event
    })
  };
  const acceptHeader = event.headers.Accept.split(',').slice(0, 1)[0];

  s3.getObject(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else {
      const json = JSON.parse(data.Body.toString('utf8')).results;

      const maleFemaleData = createChartData('male-female-chart', json);
      const firstLastNameData = createChartData('first-last-name-chart', json);
      const firstNameData = firstLastNameData[0];
      const lastNameData = firstLastNameData[1];
      const stateData = createChartData('states-chart', json);
      const femaleData = stateData[0];
      const maleData = stateData[1];
      const overallData = stateData[2];
      const ageRangeData = createChartData('age-range', json);

      let fileContent;
      if (acceptHeader === 'application/json') {
        let fileContent = createJSONObj(
          maleFemaleData,
          firstNameData,
          lastNameData,
          femaleData,
          maleData,
          overallData,
          ageRangeData
        );
        const content = JSON.stringify(fileContent);

        fs.writeFile('user-data.json', fileContent, function(err) {
          if (err) {
            return console.log(err);
          }
          fs.readFile('user-data.json', 'utf8', function(err, data) {
            if (err) {
              return console.log(err);
            }
            const parameters = {
              Bucket: 'mrbucket-3',
              Key: 'user-data.json',
              Body: data
            };
            console.log(data);
            s3.upload(parameters, function(err, data) {
              if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
              }

              fs.unlink('./user-data.json', err => {
                if (err) {
                  console.log('failed to delete local image:' + err);
                }
                callback(null, response);
              });
            });
          });
          console.log('The text file was saved!');
        });
      } else if (acceptHeader === 'text/html') {
        fileContent = createTextFile(
          maleFemaleData,
          firstNameData,
          lastNameData,
          femaleData,
          maleData,
          overallData,
          ageRangeData
        );
        fs.writeFile('user-data.txt', fileContent, function(err) {
          if (err) {
            return console.log(err);
          }
          fs.readFile('user-data.txt', 'utf8', function(err, data) {
            if (err) {
              return console.log(err);
            }
            const parameters = {
              Bucket: 'mrbucket-3',
              Key: 'user-data.txt',
              Body: data
            };
            s3.upload(parameters, function(err, data) {
              if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
              }
              console.log('it actually fucking worked');

              fs.unlink('./user-data.txt', err => {
                if (err) {
                  console.log('failed to delete local image:' + err);
                }
                callback(null, response);
              });
            });
          });
          console.log('The text file was saved!');
        });
      } else {
        let createJSON = createJSONObj(
          maleFemaleData,
          firstNameData,
          lastNameData,
          femaleData,
          maleData,
          overallData,
          ageRangeData
        );
        fileContent = js2xmlparser.parse('users', createJSON);
        fs.writeFile('user-data.xml', fileContent, function(err) {
          if (err) {
            return console.log(err);
          }
          fs.readFile('user-data.xml', 'utf8', function(err, data) {
            if (err) {
              return console.log(err);
            }
            const parameters = {
              Bucket: 'mrbucket-3',
              Key: 'user-data.xml',
              Body: data
            };
            console.log(data);
            s3.upload(parameters, function(err, data) {
              if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
              }

              fs.unlink('./user-data.xml', err => {
                if (err) {
                  console.log('failed to delete local image:' + err);
                }
                callback(null, response);
              });
            });
          });
          console.log('The text file was saved!');
        });
      }
    }
  });
};
