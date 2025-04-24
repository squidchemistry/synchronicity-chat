// lib/socket.ts
import { io, Socket } from 'socket.io-client'

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4000'

let socket: Socket | null = null

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      transports: ['websocket'],
      reconnectionAttempts: 5,
    })

    socket.on('connect', () => {
      console.log('✅ Connected to Socket.io server')
    })

    socket.on('disconnect', () => {
      console.warn('⚠️ Disconnected from Socket.io server')
    })
  }

  return socket
}
