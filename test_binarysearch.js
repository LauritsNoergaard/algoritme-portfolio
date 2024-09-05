window.addEventListener("load", start)

function start() {
    console.log("Javascript is running")
    //binarySearch(22, values, compare)
    //console.log(binarySearch("gaardejer", ordliste, stringCompare));
    //binarySearch("Ron Weasley", persons, nameCompare)
}

persons = [{name: "Draco Malfoy", house: "Slytherin"},
	{name: "Harry Potter", house: "Gryffindor"},
	{name: "Hermione Granger", house: "Gryffindor"},
	{name: "Neville Longbottom", house: "Gryffindor"},
	{name: "Ron Weasley", house: "Gryffindor"}];

ordliste = ["aarhus", "andedam", "andegård", "bondefanget", "bondegård", "børnearbejde", "gaardejer", "gadefejer", "gær", "gødning", "kalapøjser", "kalundborg", "kørt", "kårde", "ålborg"];
const values = [21,22,23,25,27,28,29,31,32,34,35];

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

function nameCompare(search, value) {
    return search.localeCompare(value.name)
}

function stringCompare(search, value) {
        return search.localeCompare(value)
}

function compare(search, value) {
    return search-value
}

