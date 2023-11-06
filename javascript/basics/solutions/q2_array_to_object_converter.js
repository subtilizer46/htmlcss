/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arrayOfObjects, key) => {
	// Write your code here
	const result = {};

	if(arrayOfObjects.keyValue<0 || arrayOfObjects.key<0){
		return 'invalid value';
	}

    for (const obj of arrayOfObjects) {
        const keyValue = obj[key];
        result[keyValue] = obj;
    }

    return result;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }

convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'value')

		{
			"abc":{id: 1, value: 'abc'},
			"xyz" :{id: 2, value: 'xyz'}
		}




















*/

module.exports = convert;
