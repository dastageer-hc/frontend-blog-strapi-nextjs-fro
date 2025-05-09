import axios from "axios";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

const API_URL = "https://funny-acoustics-800f9a702f.strapiapp.com";

type Params = {
  params: { slug: string };
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

async function getBlogPost(slug: string) {
  try {
    const res = await axios.get(
      `${API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    return res.data.data[0];
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPost({ params }: Params) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className='p-6 max-w-4xl mx-auto'>
      <article className='prose prose-lg max-w-none'>
        <h1 className='text-4xl font-bold mb-2'>{post.title}</h1>
        <div className='flex items-center gap-4 text-gray-600 mb-8'>
          <p>By {post.author}</p>
          <p>•</p>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        <div className='prose-headings:font-bold prose-a:text-blue-600'>
          <ReactMarkdown>{post.content[0].richTextmarkdown}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
