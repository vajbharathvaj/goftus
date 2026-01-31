export type ProductItem = {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  image_url?: string | null;
  link?: string | null;
  subtitle: "product_snapshot" | "live_product";
  status: "active" | "inactive";
  created_at?: string;
  updated_at?: string;
};

const API_BASE = import.meta.env.VITE_API_BASE;

const parseJson = async (response: Response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Request failed");
  }
  return response.json();
};

export const fetchProducts = async (params?: { subtitle?: string; status?: string }) => {
  const query = new URLSearchParams();
  if (params?.subtitle) query.set("subtitle", params.subtitle);
  if (params?.status) query.set("status", params.status);
  const response = await fetch(`${API_BASE}/products?${query.toString()}`);
  const data = await parseJson(response);
  return data?.products ?? [];
};

export const fetchAdminProducts = async (token: string) => {
  const response = await fetch(`${API_BASE}/admin/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await parseJson(response);
  return data?.products ?? [];
};

export const createAdminProduct = async (token: string, payload: Partial<ProductItem>) => {
  const response = await fetch(`${API_BASE}/admin/products`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return parseJson(response);
};

export const updateAdminProduct = async (
  token: string,
  id: string,
  payload: Partial<ProductItem>
) => {
  const response = await fetch(`${API_BASE}/admin/products/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return parseJson(response);
};

export const deleteAdminProduct = async (token: string, id: string) => {
  const response = await fetch(`${API_BASE}/admin/products/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return parseJson(response);
};

export const uploadAdminProductImage = async (
  token: string,
  dataUrl: string,
  filename: string
) => {
  const response = await fetch(`${API_BASE}/admin/products/upload-image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dataUrl, filename }),
  });
  return parseJson(response);
};
