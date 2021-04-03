const http = require('http');
const server = http.createServer((request, response) => {

    response.end('NodeJs basics');
});
server.listen(5000);

console.log('Server is running at http://127.0.0.1:5000/');
