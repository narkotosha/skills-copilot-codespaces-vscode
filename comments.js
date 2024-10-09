// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// Use the createServer method to create the server.
// Use the listen method to listen on port 3000.
// Use the fs module to read the comments.html file.
// Send the file to the client using the response object.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }
    res.end();
  });
}).listen(3000, () => {
  console.log('Server is running on port 3000');
});