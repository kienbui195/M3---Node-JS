const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888]
let max = array[0]

let findMaxValueOfArray = array => {
    for (const item of array) {
        if (item > max) {
            max = item
        }
    }
    return max
}

console.log(`Gía trị max trong mảng: ${findMaxValueOfArray(array)}`)

