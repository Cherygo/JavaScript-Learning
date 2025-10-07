//write a function isAllowedToDrive, if a user is under 18 or doesnt have a driving license
// or has consumed alchohol before driving they are not allowed to drive
function isAllowedToDrive(age, hasDrivingLicense, hasConsumedAlchohol) {
  if (age > 18 && hasDrivingLicense === true && hasConsumedAlchohol === false) {
    return true;
  } else {
    return false;
  }
}
console.log(isAllowedToDrive(19, false, true));
