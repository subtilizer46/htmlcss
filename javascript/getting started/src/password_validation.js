/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/

module.exports = function checkPassword(password) {

if (typeof password !== 'string') {
  return false;
}

if (password.length < 6 || password.length > 20) {
  return false;
}

if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
  return false;
}

if (!/\d/.test(password)) {
  return false;
}

if (!/[!@#$%^&*()\-_=+{}[\]:;<>,.?~]/.test(password)) {
  return false;
}

return true;

}
