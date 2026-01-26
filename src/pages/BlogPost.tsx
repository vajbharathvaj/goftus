import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchPublishedPost } from "@/api/blogs";
import { Button } from "@/components/ui/button";

const formatDate = (value?: string) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let ignore = false;
    setLoading(true);
    setError(null);

    fetchPublishedPost(slug)
      .then((data) => {
        if (ignore) return;
        setPost(data);
      })
      .catch((err) => {
        if (ignore) return;
        setError(err.message || "Unable to load post.");
      })
      .finally(() => {
        if (ignore) return;
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [slug]);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            className="rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
            asChild
          >
            <Link to="/blogs">Back to blogs</Link>
          </Button>
        </div>

        {loading && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-300">
            Loading post...
          </div>
        )}

        {error && (
          <div className="rounded-3xl border border-rose-500/40 bg-rose-500/10 p-8 text-rose-100">
            {error}
          </div>
        )}

        {!loading && !error && post && (
          <article className="space-y-10">
            <header className="space-y-6">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                <time dateTime={post.published_at || ""}>{formatDate(post.published_at)}</time>{" "}
                • {post.author || "Goftus"}
              </div>
              <h1 className="text-4xl font-semibold text-white md:text-5xl">{post.title}</h1>
              {post.cover_image && (
                <div className="overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(post.tags) ? post.tags : post.tags.split(",")).map(
                    (tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100"
                      >
                        {tag.trim()}
                      </span>
                    )
                  )}
                </div>
              )}
            </header>

            <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-cyan-200">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default BlogPost;
