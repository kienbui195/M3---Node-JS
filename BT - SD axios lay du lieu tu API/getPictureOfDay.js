
axios = require('axios')

async function getAPIData() {
    let json = await axios.get('http://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    return json.data
}

getAPIData().then(result => console.log(result))