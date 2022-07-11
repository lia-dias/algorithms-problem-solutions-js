/**
 * Read the arrays of integers stored in A and B. Your goal is to return a an array containing the numbers that occur in elements of A and B in sorted order. If there is no intersection, return an empty array.
 * @param {Array<Number>} A 
 * @param {Array<Number>} B 
 */
function find_intersection(A, B) {
    const intersection = [];
    let iA = 0;
    let iB = 0;
    while(iA < A.length && iB < B.length) {
        if(A[iA] == B[iB]) {
            intersection.push(A[iA]);
            iA++;iB++;
        }
        else if(A[iA] < B[iB]) iA++;
        else iB++;
    }
    return intersection;
}

console.log(find_intersection([1, 3, 4, 7, 13], [1, 2, 4, 13, 15]));
console.log(find_intersection([-1, -3, 4, 7, 13], [1, 2, 4, 13, 15]));
console.log(find_intersection([1, 3, 9, 10, 17, 18], [1, 4, 9, 10]));
console.log(find_intersection([], [1, 4, 9, 10]));
console.log(find_intersection([1, 4, 9, 10], []));
console.log(find_intersection([1, 3, 5, 7], [2, 4, 6, 8]));