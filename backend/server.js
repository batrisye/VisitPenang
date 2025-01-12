const http = require('http');
const cors = require('cors');
const url = require('url');

// Mock Data (you can change this to fetch real data from a database)
const sampleData = [
  { id: 1, name: 'Sample Item 1' },
  { id: 2, name: 'Sample Item 2' },
];

// Create a basic Node.js server
const server = http.createServer((req, res) => {
  // Enable CORS by setting headers manually
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET' && parsedUrl.pathname === '/api/data') {
    // Send the sample data as a JSON response
    res.statusCode = 200;
    res.end(JSON.stringify(sampleData));
  } else {
    // Handle other routes or methods
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log('Node.js server is running on http://localhost:5000');
});
