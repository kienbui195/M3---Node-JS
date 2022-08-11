const fs = require('fs')
const qs = require('qs')
const http = require('http')

let server = http.createServer((req,res)  => {
    if (req.method === 'GET') {
        fs.readFile('index.html',  (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end();
        })
    } else {
        let data = ''
        req.on('data', chunk => {
            data += chunk
        })
        req.on('end', () => {
            let input = qs.parse(data)
            fs.readFile('index.html', 'utf8',  (err, datahtml) => {
                if (err) {
                    console.log(err)
                }
                let result
                switch (input.pheptinh) {
                    case '+':
                        result = +input.a + +input.b
                        break
                    case '-':
                        result = +input.a - +input.b
                        break
                    case '*':
                        result = +input.a * +input.b
                        break
                    case '/':
                        if (+input.b !== 0) {
                            result = `Ban ga vl`
                        } else {
                            result = +input.a/+input.b
                        }
                        break
                    default:
                        result = 'SAi cu phap'
                }
                datahtml = datahtml.replace('.', result)
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(datahtml)
                res.end()
            })
        })
    }
})

server.listen('8080', () => {
    console.log(`Server is running at http://localhost:8080`)
})