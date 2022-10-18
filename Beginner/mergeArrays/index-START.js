/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// With set
function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    return [...new Set([...jointArray])]

    
}

// With set and flat
function mergeArrays(...arrays) {

    let jointArray = arrays.flat();

    return [...new Set([...jointArray])]

    
}

// With filter and indexOf
function mergeArrays(...arrays) {
    return arrays.flat().filter((n, i, arr) => i == arr.indexOf(n));
}


// With reduce
function mergeArrays(...arrays) {
    return arrays.flat().reduce((acc, n) => acc.includes(n) ? acc : acc.concat(n), []);
}

console.log([Array.from(Array(Math.round(100*Math.random())), _ => Math.floor(9*Math.random()))],
            [Array.from(Array(Math.round(100*Math.random())), _ => Math.floor(9*Math.random()))],
            [Array.from(Array(Math.round(100*Math.random())), _ => Math.floor(9*Math.random()))],
            [Array.from(Array(Math.round(100*Math.random())), _ => Math.floor(9*Math.random()))],
            [Array.from(Array(Math.round(100*Math.random())), _ => Math.floor(9*Math.random()))])

module.exports = mergeArrays