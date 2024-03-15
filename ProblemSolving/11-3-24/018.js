function findMajorityElement(arr) {
    let candidate = null;
    let count = 0;
    
  
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }

    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }
    
    if (count > arr.length / 2) {
        return candidate;
    } else {
        return "No majority element";
    }
}


const array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(findMajorityElement(array));
