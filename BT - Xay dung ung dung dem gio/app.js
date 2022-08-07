function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function countDown(i) {
    while (i > 0) {
        document.getElementById('result').innerHTML = i;
        i--;
        await sleep(1000);
    }
    return "counter finished!";
}

let main = () => {
    let input = document.getElementById('input')
    let counter = countDown(input.value)
    counter.then((msg) => {
        document.getElementById('result').innerHTML = msg
    });
}

