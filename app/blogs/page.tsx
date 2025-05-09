import axios from "axios";
import Link from "next/link";

const API_URL =
  "https://funny-acoustics-800f9a702f.strapiapp.com/api/blogs?populate=*";

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
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <main className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Blogs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {blogs.map((blog: Blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`}>
            <div className='border p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm'>
              <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
              <p className='text-gray-600 mb-2'>By {blog.author}</p>
              <p className='text-sm text-gray-500'>
                {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
