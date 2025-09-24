// server.js
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

let clients = [];

server.on('connection', ws => {
  clients.push(ws);

  ws.on('message', message => {
    // Broadcast message to all other clients
    const data = JSON.parse(message);
    clients.forEach(client => {
      if(client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on('close', () => {
    clients = clients.filter(client => client !== ws);
  });
});

console.log("Signaling server running on ws://localhost:3000");
