import { DiscordGuild } from "@/types/next-auth";
import ServerItem from "./server-item";

interface ServerListProps {
  guilds: DiscordGuild[];
}

export default function ServerList({ guilds }: ServerListProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">Your Discord Servers</h2>
      {guilds.length === 0 ? (
        <p>No servers found</p>
      ) : (
        <ul className="space-y-2">
          {guilds.map((guild) => (
            <ServerItem key={guild.id} guild={guild} />
          ))}
        </ul>
      )}
    </div>
  );
}
