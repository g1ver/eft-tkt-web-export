import { Session } from "next-auth";
import SignOutButton from "./sign-out-btn";
import { getGuilds } from "../actions";
import ServerList from "./server-list";
import UserProfile from "./user-profile";

export default async function Dashboard({ session }: { session: Session }) {
  const guilds = await getGuilds(session.accessToken!);

  return (
    <>
      <div className="flex mx-3 justify-between items-center">
        <UserProfile user={session.user} />
        <SignOutButton />
      </div>
      <ServerList guilds={guilds} />
    </>
  );
}
