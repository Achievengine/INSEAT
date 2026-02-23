const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const getBlogs = async (params: { page?: number; limit?: number; tag?: string; search?: string } = {}) => {
  const query = new URLSearchParams();
  if (params.page) query.append('page', params.page.toString());
  if (params.limit) query.append('limit', params.limit.toString());
  if (params.tag) query.append('tag', params.tag);
  if (params.search) query.append('search', params.search);

  try {
      const res = await fetch(`${API_URL}/public/blogs?${query.toString()}`);
      return await res.json();
  } catch (e) {
      console.error(e);
      return { success: false, message: 'Network Error' };
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
      const res = await fetch(`${API_URL}/public/blogs/${slug}`);
      return await res.json();
  } catch (e) {
      console.error(e);
      return { success: false, message: 'Network Error' };
  }
};

export const getTags = async () => {
  try {
      const res = await fetch(`${API_URL}/public/blogs/tags`);
      return await res.json();
  } catch (e) {
      console.error(e);
      return { success: false, message: 'Network Error' };
  }
};
