/*let download = url => {
    setTimeout(() => {
        console.log(`Downloading ${url}...`)
    }, 1000)
}

let process = picture => {
    console.log(`Processing ${picture}`)
}

download(url);
process(url);*/

let url = 'https://www.javascripttutorial.net/pic.jpg';
let download = (url, callback) => {
    setTimeout(() => {
        console.log(`Downloading ${url}...`)
        callback(url);
    }, 1000)
}

let process = picture => {
    console.log(`Processing ${picture}`)
}

download(url, process)


