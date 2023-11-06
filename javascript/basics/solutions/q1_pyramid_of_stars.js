/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height) => {
	// Write your code here
if (typeof height !== 'number' || height<=0) {
     return "";
}

let pattern = '';
for (let i = 1; i <= height; i++) {
    pattern += ' '.repeat(height - i) + ' *'.repeat(i) + ' \n';
}

return (pattern);
};
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid
