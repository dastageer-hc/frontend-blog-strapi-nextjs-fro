import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 shine-effect">
      <div className="backdrop-blur-sm bg-gray-900/30 border border-gray-800/30 rounded-lg p-8 max-w-md w-full">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-gray-100">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gray-800/50 hover:bg-gray-800/70 text-gray-100 rounded-lg transition-colors duration-200 backdrop-blur-sm border border-gray-800/30"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
