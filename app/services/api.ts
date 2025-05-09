import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPosts = async () => {
  try {
    const response = await api.get("/api/posts?populate=*");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getPost = async (id: string) => {
  try {
    const response = await api.get(`/api/posts/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get("/api/categories?populate=*");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
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
    console.error("Error fetching posts by category:", error);
    return [];
  }
};
