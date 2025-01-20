import { signIn } from "@/auth";

export default function SignIn() {
  return (
      <div className="bg-zinc-900/50 shadow-xl border border-zinc-800 rounded-lg p-6 backdrop-blur-sm justify-items-center">
        <p className="text-zinc-400 text-xl mb-2">
          Sign in below to view, download, and export your Discord servers&apos; EFT
          Teamkill Tracker Data.
        </p>
      <form
        action={async () => {
          "use server";
          await signIn("discord");
        }}
      >
        <button
          className="flex items-center justify-center gap-3 w-full max-w-sm px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium rounded-lg transition-colors duration-200 shadow-lg"
          type="submit"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 -28.5 256 256"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" />
          </svg>
          Sign in with Discord
        </button>
      </form>
    </div>
  );
}
