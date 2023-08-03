import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Advent_Pro } from "next/font/google";
import { MyThemeContextProvider } from "./context/Context";

const advent = Advent_Pro({ subsets: ["latin"] });

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
    <html lang="en" className={` scroll-smooth`}>
      <MyThemeContextProvider>
        <body className={"bg-gradient-to-b from-emerald-200 to-transparent dark:from-slate-700 dark:bg-slate-700 dark:fill-transparent " + advent.className}>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          <div className="relative">{children}</div>
          <Footer />
        </body>
        </MyThemeContextProvider>
    </html>
  );
}
