// components/ServerList.tsx
type Server = {
    name: string
    channels: string[]
  }
  
  const servers: Server[] = [
    { name: 'Synchronicity', channels: ['general', 'crypto', 'ai'] },
    { name: 'DevTalk', channels: ['frontend', 'backend', 'help'] },
  ]
  
  const ServerList = () => {
    return (
      <div className="w-64 bg-gray-800 p-4 text-white">
        {servers.map((server, i) => (
          <div key={i} className="mb-6">
            <h3 className="font-semibold text-lg mb-2">{server.name}</h3>
            <ul className="ml-2 space-y-1">
              {server.channels.map((channel, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-gray-300 hover:text-white"
                >
                  # {channel}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }
  
  export default ServerList
  