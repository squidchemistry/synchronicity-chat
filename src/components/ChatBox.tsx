// components/ChatBox.tsx
'use client'
import { useState } from 'react'
import MessageBubble from './MessageBubble'

type Message = {
  id: number
  user: string
  text: string
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), user: 'You', text: input },
    ])
    setInput('')
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-800">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} user={msg.user} text={msg.text} />
        ))}
      </div>
      <div className="p-4 bg-gray-900 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-2 rounded text-black"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatBox
