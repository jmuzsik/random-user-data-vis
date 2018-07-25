const mockData = require('./mock.json').results;

export function separateMaleAndFemale(data): [any[], any[]] {
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

export function namePercentages(
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
    name;
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
  const statesWithGenderCount = {};
  for (let i = 0; i < data.length; i++) {
    currentUser = data[i];
    currentState = currentUser.location.state;
    gender = currentUser.gender;
    if (!statesWithGenderCount[currentState]) {
      statesWithGenderCount[currentState] = {};
      statesWithGenderCount[currentState].count = 1;
      statesWithGenderCount[currentState].gender = {};
      statesWithGenderCount[currentState].gender[gender] = 1;
    } else {
      statesWithGenderCount[currentState].count += 1;
      statesWithGenderCount[currentState].gender[
        gender
      ] = statesWithGenderCount[currentState].gender[gender]
        ? statesWithGenderCount[currentState].gender[gender] + 1
        : 1;
    }
  }
  return statesWithGenderCount;
}

export function separateByAgeRanges(data): {} {
  let currentUser, age;
  const ageRanges = {
    zeroToTwenty: 0,
    twentyOneToForty: 0,
    fortyOneToSixty: 0,
    sixtyOneToEighty: 0,
    eightyOneToHundred: 0,
    hundredPlus: 0
  };
  for (let i = 0; i < data.length; i++) {
    currentUser = data[i];
    age = currentUser.dob.age;
    if (age >= 0 && age <= 20) {
      ageRanges.zeroToTwenty += 1;
    } else if (age > 20 && age <= 40) {
      ageRanges.twentyOneToForty += 1;
    } else if (age > 40 && age <= 60) {
      ageRanges.fortyOneToSixty += 1;
    } else if (age > 60 && age <= 80) {
      ageRanges.sixtyOneToEighty += 1;
    } else if (age > 80 && age <= 100) {
      ageRanges.eightyOneToHundred += 1;
    } else {
      ageRanges.hundredPlus += 1;
    }
  }
  return ageRanges;
}
