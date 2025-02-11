import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "GameEon Studios",
  description: "GameEon Studios is a creative studio that creates games and other interactive experiences.",
  openGraph: {
    images: [
      {
        url: 'https://cdn.jsdelivr.net/gh/ashishmohapatra240/GameEon-Studios/public/images/og.png',
        width: 1200,
        height: 630,
        alt: 'GameEon Studios',
      },
    ],
  },
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
        <Footer/>
      </body>
    </html>
  );
}
