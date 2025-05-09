import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Github, Linkedin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "A blog built with Strapi and Next.js",
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
          <footer className='py-6 border-t border-gray-200 dark:border-gray-800'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex flex-col items-center justify-center space-y-4'>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Assignment submission by Dastageer HC
                </p>
                <div className='flex space-x-4'>
                  <a
                    href='https://github.com/dastageerh'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
                  >
                    <Github className='w-5 h-5' />
                  </a>
                  <a
                    href='https://linkedin.com/in/dastageerh'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
                  >
                    <Linkedin className='w-5 h-5' />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
