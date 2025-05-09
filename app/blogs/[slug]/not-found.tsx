import Link from "next/link";

export default function NotFound() {
  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center p-6'>
      <h2 className='text-3xl font-bold mb-4'>Blog Post Not Found</h2>
      <p className='text-gray-600 mb-6'>
        The blog post you're looking for doesn't exist.
      </p>
      <Link
        href='/blogs'
        className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
      >
        Back to Blogs
      </Link>
    </div>
  );
}
