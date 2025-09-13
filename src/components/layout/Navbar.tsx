import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav className="glass-nav rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:shadow-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-bg-aqua rounded-lg flex items-center justify-center relative">
            <span className="text-white font-bold text-sm">G</span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-goftus-orange rounded-full"></div>
          </div>
          <span className="font-display font-bold text-lg text-foreground">GOFTUS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative",
                location.pathname === item.href
                  ? "text-goftus-aqua bg-goftus-aqua/5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-goftus-orange after:rounded-full"
                  : "text-foreground-secondary hover:text-foreground hover:bg-muted/50"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="animate-magnetic hover:text-goftus-aqua">
            Login
          </Button>
          <Button variant="hero" size="sm" className="animate-magnetic">
            Get a quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-nav rounded-2xl p-4">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                  location.pathname === item.href
                    ? "text-goftus-aqua bg-goftus-aqua/5"
                    : "text-foreground-secondary hover:text-foreground hover:bg-muted/50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-foreground-secondary">Theme</span>
                <ThemeToggle />
              </div>
              <Button variant="ghost" size="sm" className="animate-magnetic">
                Login
              </Button>
              <Button variant="hero" size="sm" className="animate-magnetic">
                Get a quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}