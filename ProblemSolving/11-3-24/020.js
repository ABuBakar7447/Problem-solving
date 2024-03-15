let A = [0,1,3,4,5,5,7,7];

let duplicates = [];

for (let i = 0; i < A.length; i++) {
    let duplicate = false;
    for (let j = i + 1; j < A.length; j++) {
        if (A[j] == A[i]) {
            duplicate = true;
            break;
        }
    }

    if (duplicate && !duplicates.includes(A[i])) { 
        duplicates.push(A[i]);
    }
}

console.log(duplicates);
