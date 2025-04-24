// server/socketServer.ts
import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Load environment variables

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// ✅ Socket.IO connection
io.on('connection', (socket) => {
  console.log(`🔌 Client connected: ${socket.id}`);

  // ✅ Listen for chat messages
  socket.on('chat:message', (data) => {
    console.log('📩 Received message:', data);
    io.emit('chat:message', data); // ✅ Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Socket.IO server running on http://localhost:${PORT}`);
});
