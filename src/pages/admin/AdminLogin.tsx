import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { adminLogin } from "@/api/blogs";
import { useAuth } from "@/auth/AuthContext";

const AdminLogin: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await adminLogin(email, password);
      const token = response?.token || response?.accessToken;
      const adminEmail = response?.email || email;
      const isSuperAdmin = Boolean(response?.isSuperAdmin);
      if (!token) {
        throw new Error("Missing token in response.");
      }
      login(token, adminEmail, isSuperAdmin);
      const redirectPath = (location.state as { from?: string })?.from || "/admin/blogs";
      navigate(redirectPath, { replace: true });
    } catch (err: any) {
      setError(err.message || "Unable to login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-md px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(2,12,23,0.6)]">
          <h1 className="text-2xl font-semibold text-white">Admin Login</h1>
          <p className="mt-2 text-sm text-slate-300">
            Sign in to manage Goftus blog posts.
          </p>

          {error && (
            <div className="mt-6 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-100">
              {error}
            </div>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Admin email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="bg-white/5"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="bg-white/5"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
