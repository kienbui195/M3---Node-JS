async function getDivision(a,b) {
    if (b !== 0) {
        return `Thuong 2 so: ${a/b}`
    } else throw new Error('Nhap sai b')
}

async function f() {
    try {
        let result = await getDivision(2,7)
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
}

f()