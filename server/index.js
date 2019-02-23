const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

function setAllHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');
}

const server = http.createServer((req, res) => {
    setAllHeaders(res);
    res.end(JSON.stringify( {
        serverTime: new Date().getTime()
    }));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
