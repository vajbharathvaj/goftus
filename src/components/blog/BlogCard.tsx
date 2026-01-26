import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/api/blogs";

const formatDate = (value?: string) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

export const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(2,12,23,0.4)] transition hover:border-cyan-400/40">
      <Link to={`/blogs/${post.slug}`} className="block h-full">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#071423]">
          {post.cover_image ? (
            <img
              src={post.cover_image}
              alt={post.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
              No cover image
            </div>
          )}
        </div>
        <div className="flex h-full flex-col gap-3 p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
            <time dateTime={post.published_at || ""}>{formatDate(post.published_at)}</time> •{" "}
            {post.author || "Goftus"}
          </div>
          <h2 className="text-xl font-semibold text-white">{post.title}</h2>
          <p className="text-sm text-slate-300">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
};
