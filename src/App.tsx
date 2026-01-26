import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { Layout } from "@/components/layout/Layout";
import { AuthProvider } from "@/auth/AuthContext";
import { AdminRoute } from "@/auth/AdminRoute";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AIPolicy from "./pages/AIPolicy";
import NotFound from "./pages/NotFound";
import SecurityDetails from "./pages/Security";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminBlogEditor from "./pages/admin/AdminBlogEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="features" element={<Products />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="ai-policy" element={<AIPolicy />} />
                <Route path="security" element={<SecurityDetails />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:slug" element={<BlogPost />} />
                <Route path="admin/login" element={<AdminLogin />} />
                <Route
                  path="admin/blogs"
                  element={
                    <AdminRoute>
                      <AdminBlogs />
                    </AdminRoute>
                  }
                />
                <Route
                  path="admin/blogs/new"
                  element={
                    <AdminRoute>
                      <AdminBlogEditor />
                    </AdminRoute>
                  }
                />
                <Route
                  path="admin/blogs/:id/edit"
                  element={
                    <AdminRoute>
                      <AdminBlogEditor />
                    </AdminRoute>
                  }
                />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
