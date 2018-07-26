'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const fs = require('fs');

const createChartData = require('./utils').createChartData;

module.exports.alterFile = (event, context, callback) => {
  const params = {
    Bucket: 'mrbucket-3',
    Key: 'files/editme.json'
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
      console.log(ageRangeData);

      let fileContent;
      if (acceptHeader === 'application/json') {
        fileContent = {};
        fileContent['maleFemalePercentages'] = {
          female: maleFemaleData[0].value,
          male: maleFemaleData[1].value
        };
        fileContent['firstLastNamePercentages'] = {
          firstNameData,
          lastNameData
        };
        fileContent['statesData'] = {
          femaleData,
          maleData,
          overallData
        };
        fileContent['ageRange'] = {
          ageRangeData
        };
      } else if (acceptHeader === 'text/html') {
        const toPercent = float => {
          let strFloat = String(float);
          if (strFloat.length < 3) return strFloat;
          let numbers = strFloat.split('.')[1];
          return numbers.slice(0, 2) + '.' + numbers.slice(2) + '%';
        };
        const stateFemaleStrings = femaleData.reduce((str, stateObj) => {
          str += `${stateObj.name}(${String(stateObj.value)}), `;
          return str;
        }, ``);
        const stateMaleStrings = maleData.reduce((str, stateObj) => {
          str += `${stateObj.name}(${String(stateObj.value)}), `;
          return str;
        }, ``);
        const stateOverallStrings = overallData.reduce((str, stateObj) => {
          str += `${stateObj.name}(${String(stateObj.value)}), `;
          return str;
        }, ``);
        fileContent = `
        There are ${toPercent(maleFemaleData[0].value)} females and ${toPercent(
          maleFemaleData[1].value
        )} males in the dataset.

        ${toPercent(
          firstNameData[0].value
        )} of first names first letter is between A and M ${toPercent(
          firstNameData[1].value
        )} of first names are between N and Z.
        Also, ${toPercent(firstNameData[2].value)} use non-english characters.

        ${toPercent(
          lastNameData[0].value
        )} of first names first letter is between A and M ${toPercent(
          lastNameData[1].value
        )} of first names are between N and Z.
        Also, ${toPercent(lastNameData[2].value)} use non-english characters.

        The states with the most female users are these: ${stateFemaleStrings.slice(
          0,
          stateFemaleStrings.length - 2
        )}.
        The states with the most male users are these: ${stateMaleStrings.slice(
          0,
          stateMaleStrings.length - 2
        )}.
        The states with the most overall users are these: ${stateOverallStrings.slice(
          0,
          stateOverallStrings.length - 2
        )}.

        There are ${toPercent(
          ageRangeData[0].value
        )} users aged between zero and twenty. 
        There are ${toPercent(
          ageRangeData[1].value
        )} users aged between twenty one and forty. 
        There are ${toPercent(
          ageRangeData[2].value
        )} users aged between forty one and sixty. 
        There are ${toPercent(
          ageRangeData[3].value
        )} users aged between sixty one and eighty. 
        There are ${toPercent(
          ageRangeData[4].value
        )} users aged between eighty one and one hundred. 
        There are ${toPercent(
          ageRangeData[4].value
        )} users older then one hundred. 
        `;
        console.log(fileContent);
      }
    }
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  };
  callback(null, response);
};

// const fs = require('fs');
// const content = JSON.stringify(output);

// fs.writeFile("/tmp/phraseFreqs.json", content, 'utf8', function (err) {
//     if (err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// });

// var fs = require('fs');
// fs.writeFile("/tmp/test", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// });
