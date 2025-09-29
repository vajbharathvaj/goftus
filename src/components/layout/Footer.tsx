import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, MessageCircle } from "lucide-react"; // ⬅️ updated icons

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Security", href: "/security" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "AI Policy", href: "/ai-policy" },
    { name: "Security", href: "/security" },
  ],
};

// ✅ Only Instagram and WhatsApp now
const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/goftus_ai",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/916380654780", // +91 6380654780
  },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info & Newsletter */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg-aqua rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">GOFTUS</span>
            </div>
            <p className="text-sm leading-6 text-foreground-secondary max-w-md">
              Build, ship, and scale AI—without the boilerplate. Transparent & reliable AI solutions for modern products.
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">Stay updated</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1 bg-surface-elevated border-border"
                />
                <Button variant="hero" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-foreground-muted">
                Get the latest updates on AI solutions and product releases.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-foreground-secondary hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-foreground-secondary hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-foreground-secondary hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Connect</h3>
                <div className="mt-6 flex space-x-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-secondary hover:text-goftus-aqua transition-colors"
                        aria-label={item.name}
                        title={item.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-4 text-xs text-foreground-muted space-y-1">
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border-subtle pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-foreground-muted">
              © 2025 GOFTUS. All rights reserved.
            </p>
            <p className="mt-4 text-xs leading-5 text-foreground-muted sm:mt-0">
              Built with transparency and security in mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
