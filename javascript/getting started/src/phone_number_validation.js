/*

The checkPhoneNumber() function should accept phoneNumber as input and check if it is valid.

The provided phoneNumber is a valid phoneNumber if its value matches with any of the pattern suggested below:


+1 0999999999, 
+1 099-999-9999, 
+1 (099)-999-9999, 
  +1 (099)9999999, 
  +1 099 999 9999, 
  +1 099 999-9999, 
  +1 (099) 999-9999, 
  +1 099.999.9999
  +10999999999, 
  +1099-999-9999, 
  +1(099)-999-9999, 
  +1(099)9999999, 
  +1099 999 9999, 
  +1099 999-9999, 
  +1(099) 999-9999, 
  +1099.999.9999
  
  The function should return true if validation criteria is satisfied else should return false.
  
  Use Regular Expression to perform validation check.

*/

module.exports = function checkPhoneNumber(phoneNumber) {

if (typeof phoneNumber !== 'string') {
  return false;
}

const validPatterns = [
    /^\+1 [0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/,
    /^\+1 [0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\+1 \([0-9][0-9][0-9]\)-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\+1 \([0-9][0-9][0-9]\) [0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,
    /^\+1 [0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9]$/,
    /^\+1 [0-9][0-9][0-9] [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\+1 \([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\+1 [0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9][0-9]$/,
    /^\+1[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,
    /^\+1[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\+1\([0-9][0-9][0-9]\)-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\+1\([0-9][0-9][0-9]\)[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/,
    /^\+1[0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9]$/,
    /^\+1[0-9][0-9][0-9] [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\+1\([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/,
    /^\+1[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9][0-9]$/,
];

for (const pattern of validPatterns) {
    if (pattern.test(phoneNumber)) {
        return true;
    }
}

return false;

}
