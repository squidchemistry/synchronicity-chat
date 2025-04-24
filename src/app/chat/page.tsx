'use client';

import { useState } from 'react';

type Message = {
  id: number;
  user: string;
  text: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    const trimmed = newMessage.trim();
    if (trimmed) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), user: 'You', text: trimmed },
      ]);
      setNewMessage('');
    }
  };

  return (
    <main className="flex flex-col h-screen bg-gray-950 text-white px-4 py-6">
      <header className="text-3xl font-bold text-blue-400 mb-6">SYNCHRONICITY</header>

      <section className="flex-1 overflow-y-auto bg-gray-900 rounded-xl p-6 space-y-4 shadow-inner">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-gray-800 rounded-lg px-4 py-2 max-w-xl text-sm shadow-md"
            >
              <strong className="text-blue-400">{msg.user}:</strong> <span>{msg.text}</span>
            </div>
          ))
        )}
      </section>

      <footer className="mt-4 flex gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 rounded-xl px-4 py-3 text-sm text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
        >
          Send
        </button>
      </footer>
    </main>
  );
}
