function merge(A, p, q, r) {
    let leftSizeLength = q - p + 1;
    let rightSizeLength = r - q;
    let L = [];
    let R = [];
    for(let i = 0; i < leftSizeLength; i++) {
        L[i] = A[p + i];
    }
    for(let i = 0; i < rightSizeLength; i++) {
        R[i] = A[q + i + 1];
    }
    L.push(Number.MAX_VALUE);
    R.push(Number.MAX_VALUE);
    let i = j = 0;
    for(let k = p; k <= r; k++) {
        if( L[i] <= R[j] ) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
    }
}

function mergeSort(A, p, r) {
    if( p < r ) {
        let q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
    return A;
}

console.log(mergeSort([10,9,8,7,6,5,4,3,2,1], 0, 9));