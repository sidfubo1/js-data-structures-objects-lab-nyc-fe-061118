// Write your solution in this file!
let driver = {
  FirstName: 'Sid',
  LastName: 'Shah',
  Age: 25
}

function updateDriverWithKeyAndValue (driverCopy, key, value) {
  driverCopy = Object.assign({}, driver);
  driverCopy[key] = value;
}