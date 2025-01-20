import { DiscordGuild } from "@/types/next-auth";
import data from "@/app/data/tarkov_data.json";

export async function getGuilds(accessToken: string): Promise<DiscordGuild[]> {
  "use server";

  const response = await fetch("https://discord.com/api/users/@me/guilds", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch guilds");
  }

  const res = await response.json();

  const validIds = Object.keys(data);
  const guilds = res.filter((guild: DiscordGuild) => validIds.includes(guild.id));
  return guilds
}
