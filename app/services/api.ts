import axios from 'axios';

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  'https://funny-acoustics-800f9a702f.strapiapp.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPosts = async () => {
  try {
    const response = await api.get('/api/posts?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPost = async (id: string) => {
  try {
    const response = await api.get(`/api/posts/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get('/api/categories?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getPostsByCategory = async (categoryId: string) => {
  try {
    const response = await api.get(
      `/api/posts?filters[categories][id][$eq]=${categoryId}&populate=*`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
};

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
    const res = await axios.get(
      `${API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    return res.data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getBlogPosts(): Promise<Blog[]> {
  try {
    const res = await axios.get(`${API_URL}/api/blogs?populate=*`);
    return res.data.data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
