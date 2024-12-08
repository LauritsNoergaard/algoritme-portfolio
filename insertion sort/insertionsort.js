export function insertionSortShift (arr) {
    console.log("List before sorting: " + arr)

    let iterations = 0;

    let wrongValue;
    //Loop through array 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            wrongValue = arr[i];
            let j = i;
            while (wrongValue < arr[j-1]) {
                arr[j] = arr[j-1];
                j--;

                iterations++;
            }
            arr[j] = wrongValue;
        }
        iterations++;
    }

    console.log("List after sorting: " + arr);
    console.log("Iterations: " + iterations)

    return arr;
}

export function insertionSortswap(arr) {
    console.log("List before sorting: " + arr);
    let iterations = 0;

    function swap(indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    }

    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j-1]) {
            swap(j, j-1)
            j--;
            iterations++;
        }
        iterations++;
    }

    console.log("List after sorting: " + arr);
    console.log("Iterations: " + iterations)
    return arr;
}

