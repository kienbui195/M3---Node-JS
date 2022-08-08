

async function findValueMaxOfArray(array) {
    if (array.length > 0) {
        let max = array[0]
        for (const item of array) {
            if (item > max) {
                max = item
            }
        }
        return max
    } else throw new Error('Khong phai la mang')
}

async function f() {
    try {
        let result = await findValueMaxOfArray([1,2,3])
        console.log(result)
    } catch(e) {
        console.log(e)
    }
}

f()

