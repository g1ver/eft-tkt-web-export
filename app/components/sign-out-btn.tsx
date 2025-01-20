import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Sign out
        </button>
      </form>
  );
}
