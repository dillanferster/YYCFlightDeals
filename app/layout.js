import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-[var(--color-bg)] scroll-smooth">
      <body className={inter.className}>
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
