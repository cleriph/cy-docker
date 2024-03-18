const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  // Determine the response content type based on the request
  let contentType = 'text/plain';
  if (req.url === '/api') {
    contentType = 'application/json';
  }

  // Set the Content-Type header just before sending the response
  res.setHeader('Content-Type', contentType);

  // Check the URL of the request and respond accordingly
  if (req.url === '/') {
    res.end('Hello World\n');
  } else if (req.url === '/api') {
    res.end(JSON.stringify({ message: 'Hello from the API' }));
  } else {
    // For not found, set the status code before sending the response
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
