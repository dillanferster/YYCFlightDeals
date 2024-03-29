import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-fixed bg-[var(--color-bg)] scroll-smooth">
      <body className={inter.className}>
        <Nav />

        {children}
      </body>
    </html>
  );
}
