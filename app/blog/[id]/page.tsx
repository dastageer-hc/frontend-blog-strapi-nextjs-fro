import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

const API_URL = 'https://funny-acoustics-800f9a702f.strapiapp.com';

type Params = {
  params: { id: string };
};

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

async function getBlogPost(slug: string): Promise<Blog | null> {
  try {
    const res = await axios.get(
      `${API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    return res.data.data[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export default async function BlogPost({ params }: Params) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
          <p>By {post.author}</p>
          <p>•</p>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content[0].richTextmarkdown}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
