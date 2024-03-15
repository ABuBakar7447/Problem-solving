let a =[0,1,2,3,4,6];
let b = [];
for(let i=0; i<a.length; i++){
 if(a[i]!==i){
  b.push(i);
 }
}
console.log(b)