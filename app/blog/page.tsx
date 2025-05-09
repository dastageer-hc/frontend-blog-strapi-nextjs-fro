import Link from 'next/link';
import axios from 'axios';

const API_URL =
  'https://funny-acoustics-800f9a702f.strapiapp.com/api/blogs?populate=*';

type Blog = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: Array<{
    __component: string;
    id: number;
    richTextmarkdown: string;
  }>;
};

async function getBlogs() {
  try {
    const res = await axios.get(API_URL);
    return res.data.data || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: Blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    By {blog.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
