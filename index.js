// Write your solution in this file!
let driver = {
  FirstName: 'Sid',
  LastName: 'Shah',
  Age: 25
}

function updateDriverWithKeyAndValue (driver, key, value) {
  let driverCopy = {...driver};
  driverCopy[key] = value;
}