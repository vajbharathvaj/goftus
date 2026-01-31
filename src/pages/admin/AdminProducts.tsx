import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/auth/AuthContext";
import {
  createAdminProduct,
  deleteAdminProduct,
  fetchAdminProducts,
  updateAdminProduct,
  uploadAdminProductImage,
} from "@/api/products";

type SubtitleOption = "product_snapshot" | "live_product";
type StatusOption = "active" | "inactive";

const subtitleLabel = (value: SubtitleOption) =>
  value === "live_product" ? "Live product" : "Product snapshot";

const AdminProducts: React.FC = () => {
  const { token, logout } = useAuth();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [benefits, setBenefits] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [link, setLink] = useState("");
  const [subtitle, setSubtitle] = useState<SubtitleOption>("product_snapshot");
  const [status, setStatus] = useState<StatusOption>("active");
  const [saving, setSaving] = useState(false);

  const loadProducts = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAdminProducts(token);
      setProducts(data || []);
    } catch (err: any) {
      setError(err.message || "Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [token]);

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setBenefits("");
    setImageUrl("");
    setImagePreview("");
    setLink("");
    setSubtitle("product_snapshot");
    setStatus("active");
  };

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setName(item.name || "");
    setDescription(item.description || "");
    setBenefits((item.benefits || []).join("\n"));
    setImageUrl(item.image_url || "");
    setImagePreview(item.image_url || "");
    setLink(item.link || "");
    setSubtitle(item.subtitle || "product_snapshot");
    setStatus(item.status || "active");
  };

  const buildPayload = () => ({
    name: name.trim(),
    description: description.trim(),
    benefits: benefits
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean),
    image_url: imageUrl.trim() || null,
    link: link.trim() || null,
    subtitle,
    status,
  });

  const handleSave = async () => {
    if (!token) return;
    if (!name.trim() || !description.trim()) {
      setError("Name and description are required.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      if (editingId) {
        await updateAdminProduct(token, editingId, buildPayload());
      } else {
        await createAdminProduct(token, buildPayload());
      }
      await loadProducts();
      resetForm();
    } catch (err: any) {
      setError(err.message || "Unable to save product.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!token) return;
    setSaving(true);
    setError(null);
    try {
      await deleteAdminProduct(token, id);
      await loadProducts();
    } catch (err: any) {
      setError(err.message || "Unable to delete product.");
    } finally {
      setSaving(false);
    }
  };

  const handleImageFile = async (file?: File | null) => {
    if (!file || !token) return;
    setSaving(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      try {
        const response = await uploadAdminProductImage(token, result, file.name);
        setImageUrl(response.url || "");
        setImagePreview(response.url || "");
      } catch (err: any) {
        setError(err.message || "Unable to upload image.");
      } finally {
        setSaving(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const productCount = products.length;
  const activeCount = products.filter((p) => p.status === "active").length;

  return (
    <section className="relative min-h-screen bg-[#050814] pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl gap-6 px-6 pb-12 lg:px-10">
        <aside className="hidden w-64 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl lg:flex">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Admin Panel</p>
            <h2 className="mt-2 text-xl font-semibold text-white">GOFTUS Console</h2>
          </div>
          <div className="space-y-2">
            <Link
              to="/admin/blogs"
              className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Blog posts
            </Link>
            <Link
              to="/admin/products"
              className="rounded-2xl bg-cyan-400/15 px-4 py-3 text-left text-sm font-medium text-cyan-100"
            >
              Products
            </Link>
          </div>
          <div className="mt-auto space-y-3">
            <Button
              variant="outline"
              className="w-full rounded-full border-cyan-300/30 bg-white/5 text-cyan-100 hover:bg-white/10"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </aside>

        <div className="flex-1 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80 lg:hidden">
                Admin Panel
              </p>
              <h1 className="text-3xl font-semibold text-white md:text-4xl">
                Products Snapshot
              </h1>
              <p className="mt-2 text-sm text-slate-300">
                Manage the products that appear on the homepage snapshot.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="rounded-full border-cyan-300/30 bg-white/5 text-cyan-100 hover:bg-white/10 lg:hidden"
                onClick={logout}
              >
                Logout
              </Button>
              <Button
                className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                onClick={handleSave}
                disabled={saving}
              >
                {editingId ? "Update Product" : "Create Product"}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Total Products</p>
              <p className="mt-3 text-3xl font-semibold">{productCount}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Active</p>
              <p className="mt-3 text-3xl font-semibold text-cyan-200">{activeCount}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Inactive</p>
              <p className="mt-3 text-3xl font-semibold text-slate-200">
                {Math.max(productCount - activeCount, 0)}
              </p>
            </div>
          </div>

          {error && (
            <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-100">
              {error}
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Product details</h2>
              <p className="text-sm text-slate-300">
                The subtitle dropdown controls whether the card is a snapshot or live product.
              </p>
              <div className="mt-6 grid gap-4">
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Product name"
                  className="bg-white/5"
                />
                <Textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Short description"
                  className="bg-white/5"
                  rows={4}
                />
                <Textarea
                  value={benefits}
                  onChange={(event) => setBenefits(event.target.value)}
                  placeholder="Benefits (one per line)"
                  className="bg-white/5"
                  rows={5}
                />
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    Product image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleImageFile(event.target.files?.[0])}
                    className="block w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-400/20 file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.2em] file:text-cyan-100"
                    disabled={saving}
                  />
                  <Input
                    value={imageUrl}
                    onChange={(event) => {
                      setImageUrl(event.target.value);
                      setImagePreview(event.target.value);
                    }}
                    placeholder="Image URL (optional)"
                    className="bg-white/5"
                  />
                  {imagePreview ? (
                    <div className="mt-2 overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  ) : null}
                </div>
                <Input
                  value={link}
                  onChange={(event) => setLink(event.target.value)}
                  placeholder="Website link (optional)"
                  className="bg-white/5"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Subtitle
                    </label>
                    <select
                      value={subtitle}
                      onChange={(event) => setSubtitle(event.target.value as SubtitleOption)}
                      className="h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-200"
                    >
                      <option value="product_snapshot">Product snapshot</option>
                      <option value="live_product">Live product</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Status
                    </label>
                    <select
                      value={status}
                      onChange={(event) => setStatus(event.target.value as StatusOption)}
                      className="h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-200"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {editingId ? "Update Product" : "Create Product"}
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-cyan-300/30 bg-white/5 text-cyan-100 hover:bg-white/10"
                    onClick={resetForm}
                    disabled={saving}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Existing products</h2>
              <p className="text-sm text-slate-300">Click a product to edit it.</p>

              {loading ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                  Loading products...
                </div>
              ) : products.length === 0 ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                  No products yet.
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  {products.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-white">{item.name}</p>
                          <p className="text-xs text-slate-400">{subtitleLabel(item.subtitle)}</p>
                          <p className="mt-2 text-xs text-slate-300 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                            item.status === "active"
                              ? "border border-cyan-400/40 bg-cyan-400/10 text-cyan-100"
                              : "border border-amber-400/40 bg-amber-400/10 text-amber-100"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="rounded-full"
                          onClick={() => handleDelete(item.id)}
                          disabled={saving}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProducts;
