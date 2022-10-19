/*
Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below

arrayFilter(arr, func).
*/

// With for
function arrayFilter(array, func){
    for(let i = 0; i < array.length; i++){
        if(func(array[i])) return array[i];
    }
    return undefined;
}

// With filter
function arrayFilter(array, func){
    return array.filter(func)[0] || undefined;
}

// With filter
function arrayFilter(array, func){
    return array.find(func);
}