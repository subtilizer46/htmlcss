/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }

    function flattenRecursive(inputArr) {
        let result = [];
        for (let i = 0; i < inputArr.length; i++) {
            if (Array.isArray(inputArr[i])) {
                result = result.concat(flattenRecursive(inputArr[i]));
            } else {
                result.push(inputArr[i]);
            }
        }
        return result;
    }

    return flattenRecursive(arr);
};

module.exports = flatten;