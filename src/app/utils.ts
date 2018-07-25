import { TemplateRef } from '../../node_modules/@angular/core';

const mockData = require('./mock.json').results;

export function separateMaleAndFemale(data): [boolean[], boolean[]] {
  let currentUser;
  const females = [],
    males = [];
  for (let i = 0; i < data.length; i++) {
    currentUser = data[i];
    if (currentUser.gender === 'female') {
      females.push(true);
    } else {
      males.push(true);
    }
  }
  return [females, males];
}

export function separateByName(
  data,
  firstOrLast: string
): [any[], any[], any[]] {
  let currentUser, name: string;
  const namesAtoM = [],
    namesNtoZ = [],
    namesDifferentASCII = [];
  const aASCIIValue = 97,
    mASCIIValue = 109,
    zASCIIValue = 122;
  for (let i = 0; i < data.length; i++) {
    currentUser = data[i];
    if (firstOrLast === 'first') {
      name = currentUser.name.first;
    } else {
      name = currentUser.name.last;
    }
    if (
      name.charCodeAt(0) >= aASCIIValue &&
      name.charCodeAt(0) <= mASCIIValue
    ) {
      namesAtoM.push(true);
    } else if (
      name.charCodeAt(0) > mASCIIValue &&
      name.charCodeAt(0) <= zASCIIValue
    ) {
      namesNtoZ.push(true);
    } else {
      namesDifferentASCII.push(true);
    }
  }
  return [namesAtoM, namesNtoZ, namesDifferentASCII];
}

export function separateByState(data): {} {
  let currentUser, currentState: string, gender: string;
  const statesWithGenderCount = [];
  for (let i = 0; i < data.length; i++) {
    currentUser = data[i];
    currentState = currentUser.location.state;
    gender = currentUser.gender;
    if (!statesWithGenderCount[currentState]) {
      statesWithGenderCount[currentState] = {
        count: 1,
        male: 0,
        female: 0
      };
      statesWithGenderCount[currentState][gender] = 1;
    } else {
      statesWithGenderCount[currentState].count += 1;
      statesWithGenderCount[currentState][gender] += 1;
    }
  }
  return statesWithGenderCount;
}

export function separateByAgeRanges(data): {} {
  let currentUser, age;
  const ageRanges = {
    Zero_to_twenty: 0,
    Twenty_One_to_Forty: 0,
    Forty_One_to_Sixty: 0,
    Sixty_One_to_Eighty: 0,
    Eighty_to_One_Hundred: 0,
    One_Hundred_Plus: 0
  };
  for (let i = 0; i < data.length; i++) {
    currentUser = data[i];
    age = currentUser.dob.age;
    if (age >= 0 && age <= 20) {
      ageRanges.Zero_to_twenty += 1;
    } else if (age > 20 && age <= 40) {
      ageRanges.Twenty_One_to_Forty += 1;
    } else if (age > 40 && age <= 60) {
      ageRanges.Forty_One_to_Sixty += 1;
    } else if (age > 60 && age <= 80) {
      ageRanges.Sixty_One_to_Eighty += 1;
    } else if (age > 80 && age <= 100) {
      ageRanges.Eighty_to_One_Hundred += 1;
    } else {
      ageRanges.One_Hundred_Plus += 1;
    }
  }
  return ageRanges;
}

export function createChartData(type, data): any[] {
  const finalData = [];
  switch (type) {
    case 'male-female-chart':
      const [amountOfFemales, amountOfMales]: [
        boolean[],
        boolean[]
      ] = separateMaleAndFemale(data);
      const [percentageOfFemales, percentageOfMales] = getPercentage([
        amountOfFemales.length,
        amountOfMales.length
      ]);
      const femaleChartObj = {
        name: 'Female',
        value: percentageOfFemales
      };
      finalData.push(femaleChartObj);
      const maleChartObj = {
        name: 'Male',
        value: percentageOfMales
      };
      finalData.push(maleChartObj);
      console.log(finalData);
      return finalData;
    case 'first-last-name-chart':
      const [
        firstnameAtoM,
        firstnameMtoZ,
        firstnameDifferentASCII
      ] = separateByName(data, 'first');
      const [
        lastnameAtoM,
        lastnameMtoZ,
        lastnameDifferentASCII
      ] = separateByName(data, 'last');
      const [
        firstnameAtoMPercentage,
        firstnameMtoZPercentage,
        firstnameDifferentASCIIPercentage
      ] = getPercentage([
        firstnameAtoM.length,
        firstnameMtoZ.length,
        firstnameDifferentASCII.length
      ]);
      const [
        lastnameAtoMPercentage,
        lastnameMtoZPercentage,
        lastnameDifferentASCIIPercentage
      ] = getPercentage([
        lastnameAtoM.length,
        lastnameMtoZ.length,
        lastnameDifferentASCII.length
      ]);
      const firstNameAtoMChartObj = {
        name: 'A to M',
        value: firstnameAtoMPercentage
      };
      finalData.push([]);
      finalData[0].push(firstNameAtoMChartObj);
      const firstNameMtoZChartObj = {
        name: 'M to Z',
        value: firstnameMtoZPercentage
      };
      finalData[0].push(firstNameMtoZChartObj);
      const firstNameDifferentASCIIChartObj = {
        name: 'Different ASCII',
        value: firstnameDifferentASCIIPercentage
      };
      finalData[0].push(firstNameDifferentASCIIChartObj);
      const lastnameAtoMChartObj = {
        name: 'A to M',
        value: lastnameAtoMPercentage
      };
      finalData.push([]);
      finalData[1].push(lastnameAtoMChartObj);
      const lastnameMtoZChartObj = {
        name: 'M to Z',
        value: lastnameMtoZPercentage
      };
      finalData[1].push(lastnameMtoZChartObj);
      const lastnameDifferentASCIIChartObj = {
        name: 'Different ASCII',
        value: lastnameDifferentASCIIPercentage
      };
      finalData[1].push(lastnameDifferentASCIIChartObj);
      return finalData;
    case 'states-chart':
      const statesData = separateByState(data);
      const convertDataToArr = [];
      Object.keys(statesData).forEach(state => {
        const stateObj: StateAndGender = {
          state,
          count: statesData[state].count,
          male: statesData[state].male,
          female: statesData[state].female
        };
        convertDataToArr.push(stateObj);
      });
      let topTenByFemale = convertDataToArr.slice(0);
      topTenByFemale = topTenByFemale
        .sort((a, b) => {
          return b.female - a.female;
        })
        .slice(0, 10);
      topTenByFemale = topTenByFemale.map(currentObj => {
        const newObj = {
          name: currentObj.state,
          value: currentObj.female
        };
        return newObj;
      });
      finalData.push(topTenByFemale);
      let topTenByMale = convertDataToArr.slice(0);
      topTenByMale = topTenByMale
        .sort((a, b) => {
          return b.male - a.male;
        })
        .slice(0, 10);
      topTenByMale = topTenByMale.map(currentObj => {
        const newObj = {
          name: currentObj.state,
          value: currentObj.male
        };
        return newObj;
      });
      finalData.push(topTenByMale);
      let topTenOverall = convertDataToArr.slice(0);
      topTenOverall = topTenOverall
        .sort((a, b) => {
          return b.count - a.count;
        })
        .slice(0, 10);
      topTenOverall = topTenOverall.map(currentObj => {
        const newObj = {
          name: currentObj.state,
          value: currentObj.count
        };
        return newObj;
      });
      finalData.push(topTenOverall);
      return finalData;
    default:
      const ageRangeData = separateByAgeRanges(data);
      Object.keys(ageRangeData).forEach(ageRange => {
        const ageRangeObj = {
          name: ageRange.split('_').join(' '),
          value: ageRangeData[ageRange]
        };
        finalData.push(ageRangeObj);
      });
      return finalData;
  }
  return finalData;
}

interface StateAndGender {
  state: string;
  count: number;
  male: number;
  female: number;
}

function getPercentage(comparedValues: number[]): number[] {
  const valuesToPercentages: number[] = [];
  const sum = comparedValues.reduce((total, value) => (total += value), 0);
  for (let i = 0; i < comparedValues.length; i++) {
    const currentValue: number = comparedValues[i];
    const percentage: number = currentValue / sum;
    valuesToPercentages.push(percentage);
  }
  return valuesToPercentages;
}
