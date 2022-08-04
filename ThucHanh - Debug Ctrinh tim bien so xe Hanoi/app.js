let checkLicensePlateInHanoi = (licensePlate) => {
    const array = ['29', '30', '31', '32', '33', '40']
    for (const item of array) {
        if (licensePlate.startsWith(item)) {
            return true
        }
    }
    return false
}

let listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
let listLicensePlateInHanois = [];

for (const item of listLicensePlates) {
    if (checkLicensePlateInHanoi(item)) {
        listLicensePlateInHanois.push(item)
    }
}

console.log(`Các biển số thuộc Hà Nội: ${listLicensePlateInHanois}`)