const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  // Home Page
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>Home - Node.js Server</title>
        </head>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
          <h1>Welcome to Node.js Server!</h1>
          <p>This is the home page of our basic Node.js web server prototype.</p>
          <a href="/about">About</a> | <a href="/contact">Contact</a>
        </body>
      </html>
    `);
    return;
  }

  // About Page
  if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head><title>About</title></head>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
          <h1>About This Project</h1>
          <p>This Node.js server demonstrates handling multiple routes without using Express.</p>
          <a href="/">Home</a> | <a href="/contact">Contact</a>
        </body>
      </html>
    `);
    return;
  }

  // Contact Page
  if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head><title>Contact</title></head>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
          <h1>Contact Us</h1>
          <p>Email: support@example.com</p>
          <p>Phone: +91 98765 43210</p>
          <a href="/">Home</a> | <a href="/about">About</a>
        </body>
      </html>
    `);
    return;
  }

  // 404 Page
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>404 Not Found</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>404 - Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <a href="/">Go Back Home</a>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('🌐 Server running at http://localhost:3000');
});
