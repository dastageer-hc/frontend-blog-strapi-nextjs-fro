import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import { Github, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog built with Strapi and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`text-gray-100 `}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow pt-16 shine-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <footer className="py-6 border-t border-gray-800/30 shine-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-sm text-gray-400">
                  Assignment submission by Dastageer HC
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/dastageer-hc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dastageer-hc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
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
