import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "A blog built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <div className='min-h-screen flex flex-col'>
          <Navigation />
          <main className='flex-grow pt-16'>{children}</main>
        </div>
      </body>
    </html>
  );
}
