// components/MessageBubble.tsx
type MessageProps = {
    user: string
    text: string
    time?: string
  }
  
  const MessageBubble = ({ user, text, time }: MessageProps) => {
    return (
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">{user}</span>
          {time && <span className="text-xs text-gray-400">{time}</span>}
        </div>
        <p className="bg-gray-700 p-2 rounded-lg">{text}</p>
      </div>
    )
  }
  
  export default MessageBubble
  