/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


// With findIndex
function whereIBelong(arr, num) {
   arr.sort((a, b) => a - b);
   return Math.max(arr.findIndex(n => num <= n), arr.length);
}

// With for
function whereIBelong(arr, num) {
   arr.sort((a, b) => a - b);
   for(let i = 0; i < arr.length; i++){
      if (num <= arr[i]) return i;
   }
   return arr.length;
}

// With for and not sort
function whereIBelong(arr, num) {
   let count = 0;
   for(let i = 0; i < arr.length; i++){
      if (num > arr[i]) count++;
   }
   return count;
}

// With while
function whereIBelong(arr, num) {
   arr.sort((a, b) => a - b);
   let i = 0;
   while(num > arr[i]){
      i++;
   }
   return i;
}

module.exports = whereIBelong