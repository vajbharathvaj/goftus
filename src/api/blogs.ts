export type BlogPost = {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  author?: string;
  tags?: string[] | string;
  status: "draft" | "published";
  published_at?: string;
  created_at?: string;
  updated_at?: string;
};

export type BlogListResponse = {
  posts: BlogPost[];
  page?: number;
  totalPages?: number;
  total?: number;
};

const API_BASE = "/api";

const parseJson = async (response: Response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Request failed");
  }
  return response.json();
};

const normalizeList = (data: any): BlogListResponse => {
  const posts = data?.posts ?? data?.data ?? data ?? [];
  const page = data?.page ?? data?.pagination?.page ?? data?.meta?.page;
  const totalPages = data?.totalPages ?? data?.pagination?.totalPages ?? data?.meta?.totalPages;
  const total = data?.total ?? data?.pagination?.total ?? data?.meta?.total;
  return { posts, page, totalPages, total };
};

export const fetchPublishedPosts = async (page = 1, limit = 9) => {
  const response = await fetch(`${API_BASE}/posts?page=${page}&limit=${limit}`);
  return normalizeList(await parseJson(response));
};

export const fetchPublishedPost = async (slug: string) => {
  const response = await fetch(`${API_BASE}/posts/${slug}`);
  return parseJson(response);
};

export const adminLogin = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return parseJson(response);
};

export const fetchAdminPosts = async (token: string) => {
  const response = await fetch(`${API_BASE}/admin/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return normalizeList(await parseJson(response));
};

export const fetchAdminUsers = async (token: string) => {
  const response = await fetch(`${API_BASE}/admin/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return parseJson(response);
};

export const createAdminUser = async (token: string, email: string, password: string) => {
  const response = await fetch(`${API_BASE}/admin/users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return parseJson(response);
};

export const deleteAdminUser = async (token: string, id: string | number) => {
  const response = await fetch(`${API_BASE}/admin/users/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return parseJson(response);
};

export const createAdminPost = async (token: string, payload: Partial<BlogPost>) => {
  const response = await fetch(`${API_BASE}/admin/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return parseJson(response);
};

export const updateAdminPost = async (
  token: string,
  id: string | number,
  payload: Partial<BlogPost>
) => {
  const response = await fetch(`${API_BASE}/admin/posts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return parseJson(response);
};

export const deleteAdminPost = async (token: string, id: string | number) => {
  const response = await fetch(`${API_BASE}/admin/posts/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return parseJson(response);
};

export const publishAdminPost = async (token: string, id: string | number) => {
  const response = await fetch(`${API_BASE}/admin/posts/${id}/publish`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return parseJson(response);
};

export const unpublishAdminPost = async (token: string, id: string | number) => {
  const response = await fetch(`${API_BASE}/admin/posts/${id}/unpublish`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return parseJson(response);
};
