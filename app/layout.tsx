import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className="bg-emerald-200">
        <ClientOnly>
          <Navbar />
        </ClientOnly>

        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
