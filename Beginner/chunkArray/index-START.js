/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// With for
function chunkArray(array, size) {
    let ans = [];
    for(let i = 0; i < array.length / size; i++){
        ans.push(array.slice( i * size, (i + 1) * size));
    }
    return ans;
}

// With reduce
function chunkArray(array, size) {
    return array.reduce((acc, n, i) => {
        acc[Math.floor(i / size)] = (acc[Math.floor(i / size)]||[]).concat(n);
        return acc;
    }, []);
}

function chunkArray(array, size) {
    let result = []
    for (value of array){
        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result
}

function chunkArray(array, size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
 }

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

module.exports = chunkArray