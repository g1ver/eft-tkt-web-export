import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EFT Teamkill Tracker Data",
  description: "Download your Discord server data from the EFT Teamkill Tracker bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
