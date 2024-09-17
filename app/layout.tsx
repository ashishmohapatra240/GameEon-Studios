import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "GameEon Studios",
  description: "GameEon Studios is a creative studio that creates games and other interactive experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
