// types/message.ts

export type Message = {
    id: string // Unique ID for the message, could be timestamp or UUID
    user: string // Sender's username or user ID
    text: string // The actual message text
    timestamp: number // Timestamp for when the message was sent
  }
  
  export type MessageWithTime = Message & {
    timeFormatted: string // Human-readable formatted time (e.g., "12:30 PM")
  }
  