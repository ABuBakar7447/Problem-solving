let A = [0,1,3,4,5,5,7,7];
let B = [];
for (let i = 0; i<A.length; i++){
    let duplicate = false;
    for(let j=0; j<i; j++){
        if(B[j] == A[i]){
            duplicate = true;
            break;
        }
    }
    
    if(!duplicate){
        B.push(A[i])
    }
}

console.log(B)
console.log(B.length);
