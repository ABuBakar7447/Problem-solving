function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        console.log(i);

        for (let j = 0; j < n - i - 1; j++) {

            console.log(arr);
            console.log("value", j);

            if (arr[j] > arr[j + 1]) {

                console.log(arr[j]);

                let temp = arr[j];

                arr[j] = arr[j + 1];

                console.log(arr)

                arr[j + 1] = temp;

                console.log(arr)
            }
        }
    }

    return arr;
}


const myArray = [2, 0, 2, 1, 1, 0];
console.log("Original array:", myArray);
console.log("Sorted array:", bubbleSort(myArray));