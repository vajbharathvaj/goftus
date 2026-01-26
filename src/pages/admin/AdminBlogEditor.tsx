import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  createAdminPost,
  fetchAdminPosts,
  unpublishAdminPost,
  updateAdminPost,
} from "@/api/blogs";
import { useAuth } from "@/auth/AuthContext";
import { slugify } from "@/utils/slugify";

const AdminBlogEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const { token } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const slug = useMemo(() => slugify(title), [title]);

  useEffect(() => {
    if (!isEdit || !token) return;
    let ignore = false;
    setLoading(true);
    fetchAdminPosts(token)
      .then((response) => {
        if (ignore) return;
        const existing = response.posts.find((post) => String(post.id) === id);
        if (!existing) {
          setError("Post not found.");
          return;
        }
        setTitle(existing.title || "");
        setExcerpt(existing.excerpt || "");
        setContent(existing.content || "");
        setCoverImage(existing.cover_image || "");
        setAuthor(existing.author || "");
        setTags(Array.isArray(existing.tags) ? existing.tags.join(", ") : existing.tags || "");
        setStatus(existing.status || "draft");
      })
      .catch((err: any) => setError(err.message || "Unable to load post."))
      .finally(() => setLoading(false));

    return () => {
      ignore = true;
    };
  }, [id, isEdit, token]);

  const validate = () => {
    if (!title.trim()) return "Title is required.";
    if (!excerpt.trim()) return "Excerpt is required.";
    if (!content.trim()) return "Content is required.";
    if (!author.trim()) return "Author is required.";
    return null;
  };

  const buildPayload = (nextStatus: "draft" | "published") => ({
    title: title.trim(),
    slug,
    excerpt: excerpt.trim(),
    content,
    cover_image: coverImage.trim(),
    author: author.trim(),
    tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    status: nextStatus,
  });

  const handleSave = async (nextStatus: "draft" | "published") => {
    if (!token) return;
    const message = validate();
    if (message) {
      setError(message);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      if (isEdit && id) {
        await updateAdminPost(token, id, buildPayload(nextStatus));
        setStatus(nextStatus);
      } else {
        await createAdminPost(token, buildPayload(nextStatus));
      }
      navigate("/admin/blogs");
    } catch (err: any) {
      setError(err.message || "Unable to save post.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnpublish = async () => {
    if (!token || !id) return;
    setLoading(true);
    setError(null);
    try {
      await unpublishAdminPost(token, id);
      setStatus("draft");
    } catch (err: any) {
      setError(err.message || "Unable to unpublish post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
              Admin Panel
            </p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              {isEdit ? "Edit Post" : "New Post"}
            </h1>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-cyan-300/30 bg-white/5 text-cyan-100 hover:bg-white/10"
            asChild
          >
            <Link to="/admin/blogs">Back to list</Link>
          </Button>
        </div>

        {error && (
          <div className="mt-6 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-100">
            {error}
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-300">Title</label>
              <Input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Post title"
                className="bg-white/5"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-300">Slug</label>
              <Input value={slug} readOnly className="bg-white/5 text-slate-400" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-300">Excerpt</label>
              <Textarea
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                placeholder="Short summary for the blog list"
                rows={3}
                className="bg-white/5"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-300">Content</label>
              <Textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Markdown content"
                rows={10}
                className="bg-white/5"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Cover Image URL
                </label>
                <Input
                  value={coverImage}
                  onChange={(event) => setCoverImage(event.target.value)}
                  placeholder="https://..."
                  className="bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Author
                </label>
                <Input
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                  placeholder="Author name"
                  className="bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-slate-300">Tags</label>
                <Input
                  value={tags}
                  onChange={(event) => setTags(event.target.value)}
                  placeholder="ai, workflows, release"
                  className="bg-white/5"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                  onClick={() => handleSave("draft")}
                  disabled={loading}
                >
                  Save Draft
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-cyan-300/30 bg-white/5 text-cyan-100 hover:bg-white/10"
                  onClick={() => handleSave("published")}
                  disabled={loading || status === "published"}
                >
                  Publish
                </Button>
                {isEdit && (
                  <Button
                    variant="outline"
                    className="rounded-full border-amber-300/30 bg-white/5 text-amber-100 hover:bg-white/10"
                    onClick={handleUnpublish}
                    disabled={loading || status === "draft"}
                  >
                    Unpublish
                  </Button>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-slate-300">
                Markdown Preview
              </h2>
              <div className="prose prose-invert mt-4 max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content || "Start writing to preview your markdown."}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBlogEditor;
