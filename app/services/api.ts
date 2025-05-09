import axios from 'axios';

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  'https://funny-acoustics-800f9a702f.strapiapp.com';

// Create axios instance with default config
const api = axios.create({
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  },
});

export type Blog = {
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

export async function getBlogPost(slug: string): Promise<Blog | null> {
  try {
    const res = await api.get(
      `${API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*&_t=${Date.now()}`
    );
    return res.data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getBlogPosts(): Promise<Blog[]> {
  try {
    const res = await api.get(
      `${API_URL}/api/blogs?populate=*&_t=${Date.now()}`
    );
    return res.data.data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
