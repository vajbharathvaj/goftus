import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  createAdminUser,
  deleteAdminPost,
  deleteAdminUser,
  fetchAdminPosts,
  fetchAdminUsers,
  publishAdminPost,
  unpublishAdminPost,
} from "@/api/blogs";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/auth/AuthContext";
import { Input } from "@/components/ui/input";

const formatDate = (value?: string) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

const AdminBlogs: React.FC = () => {
  const { token, logout } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionId, setActionId] = useState<string | number | null>(null);
  const [adminUsers, setAdminUsers] = useState<any[]>([]);
  const [canManageAdmins, setCanManageAdmins] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminLoading, setAdminLoading] = useState(false);

  const loadPosts = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetchAdminPosts(token);
      setPosts(response.posts);
    } catch (err: any) {
      setError(err.message || "Unable to load posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [token]);

  useEffect(() => {
    if (!token) return;
    fetchAdminUsers(token)
      .then((response) => {
        setAdminUsers(response.users || []);
        setCanManageAdmins(true);
      })
      .catch(() => {
        setCanManageAdmins(false);
      });
  }, [token]);

  const handlePublishToggle = async (post: any) => {
    if (!token) return;
    setActionId(post.id);
    try {
      if (post.status === "published") {
        await unpublishAdminPost(token, post.id);
      } else {
        await publishAdminPost(token, post.id);
      }
      await loadPosts();
    } catch (err: any) {
      setError(err.message || "Unable to update status.");
    } finally {
      setActionId(null);
    }
  };

  const handleDelete = async (post: any) => {
    if (!token) return;
    setActionId(post.id);
    try {
      await deleteAdminPost(token, post.id);
      await loadPosts();
    } catch (err: any) {
      setError(err.message || "Unable to delete post.");
    } finally {
      setActionId(null);
    }
  };

  const handleCreateAdmin = async () => {
    if (!token) return;
    if (!adminEmail || !adminPassword) {
      setError("Admin email and password are required.");
      return;
    }
    setAdminLoading(true);
    try {
      const user = await createAdminUser(token, adminEmail, adminPassword);
      setAdminUsers((prev) => [user, ...prev]);
      setAdminEmail("");
      setAdminPassword("");
    } catch (err: any) {
      setError(err.message || "Unable to create admin.");
    } finally {
      setAdminLoading(false);
    }
  };

  const handleDeleteAdmin = async (user: any) => {
    if (!token) return;
    setAdminLoading(true);
    try {
      await deleteAdminUser(token, user.id);
      setAdminUsers((prev) => prev.filter((item) => item.id !== user.id));
    } catch (err: any) {
      setError(err.message || "Unable to delete admin.");
    } finally {
      setAdminLoading(false);
    }
  };

  const publishedCount = posts.filter((post) => post.status === "published").length;
  const draftCount = posts.filter((post) => post.status === "draft").length;

  const [activeView, setActiveView] = useState<"posts" | "admins">("posts");

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
            <button
              className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                activeView === "posts"
                  ? "bg-cyan-400/15 text-cyan-100"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
              onClick={() => setActiveView("posts")}
            >
              Blog posts
            </button>
            <Link
              to="/admin/products"
              className="w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Products
            </Link>
            {canManageAdmins && (
              <button
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  activeView === "admins"
                    ? "bg-cyan-400/15 text-cyan-100"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setActiveView("admins")}
              >
                Admin users
              </button>
            )}
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
                {activeView === "posts" ? "Blog Posts" : "Admin Users"}
              </h1>
              <p className="mt-2 text-sm text-slate-300">
                {activeView === "posts"
                  ? "Create, publish, and manage all blog content in one place."
                  : "Manage additional admins who can access the blog console."}
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
              {activeView === "posts" && (
                <Button
                  className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                  asChild
                >
                  <Link to="/admin/blogs/new">New Post</Link>
                </Button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 lg:hidden">
            <button
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                activeView === "posts"
                  ? "bg-cyan-400/20 text-cyan-100"
                  : "bg-white/5 text-slate-300"
              }`}
              onClick={() => setActiveView("posts")}
            >
              Posts
            </button>
            {canManageAdmins && (
              <button
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                  activeView === "admins"
                    ? "bg-cyan-400/20 text-cyan-100"
                    : "bg-white/5 text-slate-300"
                }`}
                onClick={() => setActiveView("admins")}
              >
                Admins
              </button>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Total Posts</p>
              <p className="mt-3 text-3xl font-semibold">{posts.length}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Published</p>
              <p className="mt-3 text-3xl font-semibold text-cyan-200">{publishedCount}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Drafts</p>
              <p className="mt-3 text-3xl font-semibold text-slate-200">{draftCount}</p>
            </div>
          </div>

          {error && (
            <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-100">
              {error}
            </div>
          )}

          {activeView === "posts" && (
            <>
              {loading ? (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-300">
                  Loading posts...
                </div>
              ) : posts.length === 0 ? (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-300">
                  No posts yet. Create your first blog post.
                </div>
              ) : (
                <div className="overflow-hidden rounded-3xl border border-white/10">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left text-sm text-slate-200">
                      <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
                        <tr>
                          <th className="px-6 py-4">Title</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Updated</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((post) => (
                          <tr key={post.id} className="border-t border-white/10">
                            <td className="px-6 py-4">
                              <div className="font-medium text-white">{post.title}</div>
                              <div className="text-xs text-slate-400">{post.slug}</div>
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                                  post.status === "published"
                                    ? "border border-cyan-400/40 bg-cyan-400/10 text-cyan-100"
                                    : "border border-amber-400/40 bg-amber-400/10 text-amber-100"
                                }`}
                              >
                                {post.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-300">
                              {formatDate(post.updated_at || post.created_at)}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-wrap items-center justify-end gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="rounded-full border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                                  asChild
                                >
                                  <Link to={`/admin/blogs/${post.id}/edit`}>Edit</Link>
                                </Button>
                                <Button
                                  size="sm"
                                  className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                                  onClick={() => handlePublishToggle(post)}
                                  disabled={actionId === post.id}
                                >
                                  {post.status === "published" ? "Unpublish" : "Publish"}
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  className="rounded-full"
                                  onClick={() => handleDelete(post)}
                                  disabled={actionId === post.id}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}

          {activeView === "admins" && canManageAdmins && (
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div>
                <h2 className="text-lg font-semibold text-white">Add People</h2>
                <p className="text-sm text-slate-300">
                  Create additional admins who can manage blog posts.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] items-end">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    Admin email
                  </label>
                  <Input
                    type="email"
                    value={adminEmail}
                    onChange={(event) => setAdminEmail(event.target.value)}
                    placeholder="name@company.com"
                    className="bg-white/5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    Password
                  </label>
                  <Input
                    type="password"
                    value={adminPassword}
                    onChange={(event) => setAdminPassword(event.target.value)}
                    placeholder="Create a password"
                    className="bg-white/5"
                  />
                </div>
                <Button
                  className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                  onClick={handleCreateAdmin}
                  disabled={adminLoading}
                >
                  Add People
                </Button>
              </div>

              <div className="rounded-2xl border border-white/10">
                <div className="grid grid-cols-[1fr_auto] gap-2 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-400 bg-white/5">
                  <span>Email</span>
                  <span>Actions</span>
                </div>
                {adminUsers.length === 0 ? (
                  <div className="px-4 py-6 text-sm text-slate-300">No additional admins yet.</div>
                ) : (
                  adminUsers.map((user) => (
                    <div
                      key={user.id}
                      className="grid grid-cols-[1fr_auto] items-center gap-2 px-4 py-4 border-t border-white/10"
                    >
                      <div className="text-sm text-slate-200">{user.email}</div>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="rounded-full"
                        onClick={() => handleDeleteAdmin(user)}
                        disabled={adminLoading}
                      >
                        Delete
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminBlogs;
