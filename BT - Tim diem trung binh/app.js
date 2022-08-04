let student =  [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
];

let sumPointOfMale = 0, numberOfMale = 0
let sumPointOfFeMale = 0, numberOfFemale = 0

for (const item of student) {
    if (item.gender === 'male') {
        sumPointOfMale += item.point
        numberOfMale++
    } else if (item.gender === 'female') {
        sumPointOfFeMale += item.point
        numberOfFemale++
    }
}

let avgPointOfMale = sumPointOfMale/numberOfMale
let avgPointOfFemale = sumPointOfFeMale/numberOfFemale

console.log(`Điểm trung bình của nam: ${avgPointOfMale}, của nữ: ${avgPointOfFemale}`)