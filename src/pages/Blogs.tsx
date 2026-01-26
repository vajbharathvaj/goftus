import React, { useEffect, useState } from "react";
import { fetchPublishedPosts } from "@/api/blogs";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";

const PAGE_SIZE = 9;

const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    fetchPublishedPosts(page, PAGE_SIZE)
      .then((response) => {
        if (ignore) return;
        setPosts(response.posts);
        if (response.totalPages) {
          setTotalPages(response.totalPages);
        } else {
          setTotalPages(null);
        }
      })
      .catch((err) => {
        if (ignore) return;
        setError(err.message || "Unable to load posts.");
      })
      .finally(() => {
        if (ignore) return;
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [page]);

  const canGoPrev = page > 1;
  const canGoNext =
    totalPages !== null ? page < totalPages : posts.length === PAGE_SIZE;

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Goftus Blog</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Insights, releases, and AI playbooks.
          </h1>
          <p className="text-lg text-slate-300">
            Explore product updates, engineering deep-dives, and client success stories from
            the Goftus team.
          </p>
        </header>

        <div className="mt-12">
          {loading && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-300">
              Loading posts...
            </div>
          )}

          {error && (
            <div className="rounded-3xl border border-rose-500/40 bg-rose-500/10 p-8 text-rose-100">
              {error}
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-300">
              No posts published yet.
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id ?? post.slug} post={post} />
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-cyan-300/30 bg-white/5 text-cyan-100 hover:bg-white/10"
                  disabled={!canGoPrev}
                  onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-cyan-300/30 bg-white/5 text-cyan-100 hover:bg-white/10"
                  disabled={!canGoNext}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Next
                </Button>
                <span className="text-sm text-slate-400">
                  Page {page}
                  {totalPages ? ` of ${totalPages}` : ""}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
