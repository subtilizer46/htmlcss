/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
   
  if (typeof pricePerKilo !== 'number' || typeof quantityInKilo !== 'number' || typeof discountPercentage !== 'number') {
    return "Invalid Input Types, All Inputs Should Be of Type Number !!";
}

  if (pricePerKilo < 0 || quantityInKilo < 0 || discountPercentage < 0) {
    return "Inputs should be positive numbers";
}

const discountAmount = (pricePerKilo * quantityInKilo * discountPercentage) / 100;
const payable = pricePerKilo * quantityInKilo - discountAmount;

return payable.toString();

}
