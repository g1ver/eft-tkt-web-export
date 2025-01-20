import { auth } from "@/auth";
import SignIn from "./sign-in";
import Dashboard from "./dashboard";
import { InfoIcon } from "lucide-react";

export default async function AuthView() {
  const session = await auth();

  if (session) {
    return (
      <>
        <Dashboard session={session} />
        <div className="flex items-start gap-2 p-3 my-4 mx-3 text-sm bg-gray-800/50 border border-gray-700 rounded-lg">
          <InfoIcon size={16} className="mt-0.5 flex-shrink-0" />
          <p className="text-gray-300">
            Due to Discord&apos;s privacy settings, we can only show unique player
            numbers instead of usernames in kill records.
          </p>
        </div>
      </>
    );
  }

  return <SignIn />;
}
