'use client';

import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed w-full  dark:bg-gray-900/80 backdrop-blur-md z-50 border-b  dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/blog" className="text-xl font-bold">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
