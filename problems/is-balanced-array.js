/**
 * Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.
 * @param {Array<Number>} A 
 */
function is_balanced_array(A) {
    let iL = 0;
    let iR = A.length - 1;
    let sumL = A[iL];
    let sumR = A[iR];
    while( iL + 1 < iR) {
        if( sumL < sumR) {
            iL+=1;
            sumL += A[iL]
        } else {
            iR-=1;
            sumR += A[iR]
        }
    }
    return sumL == sumR;
}

console.log(is_balanced_array([1,1,1,2,1]));
console.log(is_balanced_array([2,1,1,2,1]));
console.log(is_balanced_array([10,10]));
console.log(is_balanced_array([1]));