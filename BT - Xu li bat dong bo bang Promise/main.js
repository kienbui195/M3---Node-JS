let money = document.getElementById('input');


const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money.value >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("Do not enough money (10000 and more)");
            }
        }, 100);
    }))
}


let main = () => {
    document.getElementById('yourMoney').innerHTML = `Your Money: ${money.value}`
    const promise = buyACar("Vinfast").then(value => {
        document.getElementById('result').innerHTML = value
    }, error => {
        document.getElementById('result').innerHTML = error
    })
}