import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="heading-xl text-foreground">404</h1>
        <p className="text-xl text-foreground-secondary">Oops! Page not found</p>
        <p className="text-foreground-muted">The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-lg bg-goftus-aqua text-white px-6 py-3 font-medium hover:bg-goftus-aqua-hover transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
