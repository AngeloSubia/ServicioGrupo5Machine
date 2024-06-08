// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Grupo 5 ya estamos aqui!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '0.0.0.0', () => {
  console.log('Listening on 0.0.0.0:8095');
});

// run with `node server.mjs`
