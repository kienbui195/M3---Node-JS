axios = require('axios')

async function getAPIData() {
    let json = await axios.get('https://jsonplaceholder.typicode.com/users')
    return json.data
}

getAPIData().then(result => console.log(result))