const fs = require('fs')
const qs = require('qs')
const http = require('http')


const server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('todo.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        let data = ''
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let input = qs.parse(data)
            fs.readFile('display.html', 'utf8',  (err, datahtml) => {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('NewText', input.input );
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8080, function () {
    console.log('server running at http://localhost:8080 ')
});