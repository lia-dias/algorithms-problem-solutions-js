/**
 * Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.
 * @param {Array<number>} A 
 */
function centered_average( A ) {
    let max = A[1];
    let min = A[1];
    let sum = 0;
    for(let i = 0; i < A.length; i++) {
        sum += A[i];
        if(A[i] > max) max = A[i];
        else if(A[i] < min) min = A[i];
    }
    return Math.floor(( sum - max - min ) / ( A.length - 2));
}

console.log(centered_average([1, 2, 3, 4, 100]));
console.log(centered_average([100, 4, 3, 2, 1]));
console.log(centered_average([1, 1, 5, 5, 10, 8, 7]));
console.log(centered_average([-10, -4, -2, -4, -2, 0]));
console.log(centered_average([0, -2, -4, -2, -4, -10]));