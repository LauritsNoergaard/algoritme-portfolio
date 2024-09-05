function binarySearch(search, values, compfunc) {
    let min = 0
    let max = values.length-1
    let middle = Math.floor((min+max)/2)

    while (min<=max) { 
        middle = Math.floor((min+max)/2)
        c = compfunc(search, values[middle])//compare(search, values[middle])

        if(c == 0)  { //found
            console.log("FOUND")
            console.log(middle)
            return middle
        } else if(c > 0) { //too high
            min = middle + 1
        } else { //too low
            max = middle-1
        }
    }

    return -1
    
}