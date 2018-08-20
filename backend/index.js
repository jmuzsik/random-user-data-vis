'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const fs = require('fs');
var js2xmlparser = require('js2xmlparser');

const createChartData = require('./utils').createChartData;
const createTextFile = require('./utils').createTextFile;
const createJSONObj = require('./utils').createJSONObj;

exports.handler = (event, context, callback) => {
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

  let count = 0;

  s3.getObject(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else {
      let json = JSON.parse(data.Body.toString('utf8')).results;

      let maleFemaleData = createChartData('male-female-chart', json);
      let firstLastNameData = createChartData('first-last-name-chart', json);
      let firstNameData = firstLastNameData[0];
      let lastNameData = firstLastNameData[1];
      let stateData = createChartData('states-chart', json);
      let femaleData = stateData[0];
      let maleData = stateData[1];
      let overallData = stateData[2];
      let ageRangeData = createChartData('age-range', json);

      let fileContent = createJSONObj(
        maleFemaleData,
        firstNameData,
        lastNameData,
        femaleData,
        maleData,
        overallData,
        ageRangeData
      );

      fs.writeFile('/tmp/user-data.json', JSON.stringify(fileContent), function(
        err
      ) {
        if (err) {
          console.log(err);
        }
        fs.readFile('/tmp/user-data.json', 'utf8', function(err, data) {
          if (err) {
            console.log(err);
          }
          const parameters = {
            Bucket: 'mrbucket-3',
            Key: 'user-data.json',
            Body: data
          };
          s3.upload(parameters, function(err, data) {
            if (err) {
              console.log('There was an error uploading your file: ', err);
            }
          });
        });
        console.log('The text file was saved!');
      });

      fileContent = createTextFile(
        maleFemaleData,
        firstNameData,
        lastNameData,
        femaleData,
        maleData,
        overallData,
        ageRangeData
      );
      fs.writeFile('/tmp/user-data.txt', fileContent, function(err) {
        if (err) {
          console.log(err);
        }
        fs.readFile('/tmp/user-data.txt', 'utf8', function(err, data) {
          if (err) {
            console.log(err);
          }
          const parameters = {
            Bucket: 'mrbucket-3',
            Key: 'user-data.txt',
            Body: data
          };
          s3.upload(parameters, function(err, data) {
            if (err) {
              console.log('There was an error uploading your file: ', err);
            }
          });
        });
        console.log('The json file was saved!');
      });

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
      fs.writeFile('/tmp/user-data.xml', fileContent, function(err) {
        if (err) {
          console.log(err);
        }
        fs.readFile('/tmp/user-data.xml', 'utf8', function(err, data) {
          if (err) {
            console.log(err);
          }
          const parameters = {
            Bucket: 'mrbucket-3',
            Key: 'user-data.xml',
            Body: data
          };
          s3.upload(parameters, function(err, data) {
            if (err) {
              console.log('There was an error uploading your file: ', err);
            }
          });
        });
      });
    }
  });
  setTimeout(() => {
    callback(null, response);
  }, 20000);
};
