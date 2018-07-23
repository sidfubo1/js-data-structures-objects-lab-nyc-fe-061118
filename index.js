// Write your solution in this file!
let driver = {
  FirstName: 'Sid',
  LastName: 'Shah',
  Age: 25
}

function updateDriverWithKeyAndValue (driverCopy, key, value) {
  return driverCopy = [...driver, [key]: value];
}