
/*
The drawPattern() function should accept number of rows as input.
The function should return string that contains the pyramid structure for the number of rows inputted.
The pyramid structure should have the following pattern:
        *
       * *
      * * *
     * * * *
    * * * * *
The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.
*/
module.exports = function drawPattern(height) {
  if (typeof height !== 'number' || height<=0) {
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
}

var pattern = '';

for (var i = 1; i <= height; i++) {
    for (var j = 1; j <= height - i; j++) {
        pattern +=' ';
    }

    for (var k = 1; k <= i; k++) {
        pattern +='* ';
    }
    pattern = pattern + '\n';
}
return pattern;
}