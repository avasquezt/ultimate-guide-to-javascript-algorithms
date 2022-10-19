// Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. E.g

// rangeSum([1,9]) 
// Should return 45 i.e 1+2+3+4+5+6+7+8+9

// With for
function rangeSum([start, end]){
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
}

// With a formula 
function rangeSum([start, end]){
    let sumEnd = end * (end + 1) / 2;
    let sumStart = (start - 1) * (start) / 2;
    return sumEnd - sumStart;
}

// With reduce
function rangeSum([start, end]){
    return Array.from(Array(end - start + 1), (_, i) => start + i).reduce((acc, n) => acc + n, 0);
}

// With recursion
function rangeSum([start, end]){
    if(start == end) return start;
    return rangeSum([start, end - 1]) + end;
}

console.log(rangeSum([1,9]));
console.log(rangeSum([10,20]));