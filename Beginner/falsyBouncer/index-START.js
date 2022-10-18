/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// With filter
function falsyBouncer(array) {
    return array.filter(n => n);
}

// With for
function falsyBouncer(array) {
    let result  = []
    for(let value of array){
        if(value) result.push(value);
    }
    return result;
}


module.exports = falsyBouncer