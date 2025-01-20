import Image from "next/image";

interface UserProfileProps {
  user: {
    name?: string | null;
    image?: string | null;
  };
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="flex items-center gap-3">
      {user.image && (
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={user.image}
            alt={user.name || "User avatar"}
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
      )}
      <span>{user.name || "User"}</span>
    </div>
  );
}
