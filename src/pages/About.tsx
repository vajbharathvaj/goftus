import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Zap,
  Shield,
  Instagram,
  MessageCircle, // WhatsApp-like icon
} from "lucide-react";

// ───────────────── Principles ─────────────────
const principles = [
  {
    icon: Shield,
    title: "Transparency First",
    description:
      "We believe in complete transparency in our AI systems, costs, and processes. No black boxes, no surprises.",
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description:
      "Ship AI features fast without compromising on reliability. Our battle-tested infrastructure ensures 99.9% uptime.",
  },
  {
    icon: Target,
    title: "Human-Centered AI",
    description:
      "AI should augment human capabilities, not replace them. We design systems that keep humans in control.",
  },
];

// ───────────────── Timeline ─────────────────
const timeline = [
  {
    year: "2023",
    title: "Founded",
    description:
      "Started with a mission to democratize AI development for modern product teams",
  },
  {
    year: "2024",
    title: "First Enterprise Clients",
    description:
      "Helped Fortune 500 companies deploy AI features 10x faster than traditional approaches",
  },
  {
    year: "2025",
    title: "Platform Launch",
    description:
      "Launched our comprehensive AI platform serving thousands of developers worldwide",
  },
];

// ───────────────── Team (UPDATED) ─────────────────
// Put images in: public/team/bharatvaj.jpeg, thiru.jpg, shakeel.jpg
const team = [
  {
    name: "Bharatvaj",
    role: "Founder & CTO",
    bio: "",
    image: "/team/bharatvaj.jpeg",
  },
  {
    name: "Thirumurugan",
    role: "Founder & CEO",
    bio: "",
    image: "/team/thiru.jpg",
  },
  {
    name: "Shakeel",
    role: "Founder & COO",
    bio: "",
    image: "/team/shakeel.jpg",
  },
];

export default function About() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">About GOFTUS</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            We're building the future of AI development. Our mission is to make
            AI accessible, transparent, and reliable for every product team.
          </p>
        </div>
      </section>

      {/* Mission & Principles */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-foreground">Our Principles</h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              The core values that guide everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <div key={principle.title} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-goftus-aqua/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-goftus-aqua" />
                  </div>
                  <div>
                    <h3 className="heading-sm text-foreground mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-foreground">Our Journey</h2>
            <p className="text-foreground-secondary text-lg">
              From startup to platform serving thousands of developers
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.year} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-goftus-aqua/10 border-2 border-goftus-aqua flex items-center justify-center">
                    <span className="text-goftus-aqua font-bold text-sm">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="heading-sm text-foreground">{item.title}</h3>
                  <p className="text-foreground-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-foreground">Meet the Team</h2>
            <p className="text-foreground-secondary text-lg">
              Founders building with speed, clarity, and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person) => (
              <div key={person.name} className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-goftus-aqua/10 border border-border-subtle overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="heading-sm text-foreground">{person.name}</h3>
                  <p className="text-goftus-aqua font-medium text-sm mb-2">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team (Updated) */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="heading-lg text-foreground">Join Our Team</h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              We’re always looking for passionate builders. DM us with your{" "}
              <span className="font-semibold text-foreground">skills</span> or{" "}
              <span className="font-semibold text-foreground">unique talents</span>, and
              let’s create something amazing together.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/916380654780?text=Hi%20GOFTUS%2C%20here%20are%20my%20skills%20and%20talents..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card-elevated border border-border-subtle rounded-lg hover:border-goftus-aqua/40 transition-all"
            >
              <MessageCircle className="w-6 h-6 text-goftus-aqua" />
              <span className="text-foreground">DM us on WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/goftus_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card-elevated border border-border-subtle rounded-lg hover:border-goftus-aqua/40 transition-all"
            >
              <Instagram className="w-6 h-6 text-goftus-aqua" />
              <span className="text-foreground">DM us on Instagram @goftus_ai</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="heading-lg text-foreground">Work with us</h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              Ready to transform your AI development? Let's build something amazing together.
            </p>
            <Button variant="hero" size="xl">Get started today</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
