import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({subsets: ["latin"]})

export const metadata = {
  title: "Franco Silvestro Portfolio",
  description: "Portfolio made with Next Js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={"bg-emerald-200 " + advent.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
