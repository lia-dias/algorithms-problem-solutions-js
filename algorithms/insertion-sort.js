/**
 * Classic insertion sort algorithm: Given a list of elements, order them reinserting at the beginning using the invariant loop concept
 * @param {Array<numbers>} A list of elements to be reordered
 * @returns {Array<numbers>} the same list passed as parameters but ordered
 */
function insertionSort( A ) {
    // iteration starts at 1 due to first element be already 'sorted' considering he is already inserted and array starting at 0
    for(let j = 1; j < A.length; j++) {
        // insert A[j] in A[1 ... j-1]
        let i = j - 1;
        let key = A[j];
        while( i >= 0 && A[i] > key ) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key; 
    }
    return A;
}

console.log(insertionSort([5,2,4,6,1,3]));