import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { getBlogPost } from '@/app/services/api';

type Params = {
  params: { id: string };
};

export default async function BlogPost({ params }: Params) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen ">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold   mb-4">{post.title}</h1>
        <div className="flex items-center gap-4  dark:text-gray-400 mb-8">
          <p>Author - {post.author}</p>
          <p>•</p>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        <div className="prose  max-w-none dark:text-white">
          <ReactMarkdown>
            {post.content[0]?.richTextmarkdown || ''}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
