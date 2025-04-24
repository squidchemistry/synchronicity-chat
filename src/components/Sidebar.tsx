// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar = () => {
  const servers = ['Synchronicity', 'CryptoClub', 'DevTalk']

  return (
    <aside className="w-20 bg-gray-900 text-white flex flex-col items-center py-4 space-y-4">
      {servers.map((server, i) => (
        <Link key={i} href={`/chat?server=${server}`}>
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
            {server.charAt(0)}
          </div>
        </Link>
      ))}
    </aside>
  )
}

export default Sidebar;
