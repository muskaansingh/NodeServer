const http = require('http');
const server = http.createServer((request, response) => {

    response.end('Nodejs basics');
});
server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
