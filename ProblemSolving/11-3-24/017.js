let A = [0,1,0,3,12];
let B = 0;

for(let i = 0; i<A.length; i++){
    if(A[i] !== 0){
        A[B] = A[i];
        B++;
    }
}

console.log(B);

for (let i = B; i<A.length; i++){
    A[i] = 0;
}

console.log(A);
