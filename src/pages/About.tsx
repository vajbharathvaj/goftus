import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Zap, 
  Shield,
  ExternalLink 
} from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Transparency First",
    description: "We believe in complete transparency in our AI systems, costs, and processes. No black boxes, no surprises."
  },
  {
    icon: Zap,
    title: "Speed & Reliability", 
    description: "Ship AI features fast without compromising on reliability. Our battle-tested infrastructure ensures 99.9% uptime."
  },
  {
    icon: Target,
    title: "Human-Centered AI",
    description: "AI should augment human capabilities, not replace them. We design systems that keep humans in control."
  }
];

const timeline = [
  {
    year: "2023",
    title: "Founded",
    description: "Started with a mission to democratize AI development for modern product teams"
  },
  {
    year: "2024", 
    title: "First Enterprise Clients",
    description: "Helped Fortune 500 companies deploy AI features 10x faster than traditional approaches"
  },
  {
    year: "2025",
    title: "Platform Launch", 
    description: "Launched our comprehensive AI platform serving thousands of developers worldwide"
  }
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-founder", 
    bio: "Former AI Research Lead at Google. PhD in Machine Learning from Stanford.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Sarah Martinez",
    role: "CTO & Co-founder",
    bio: "Ex-Principal Engineer at OpenAI. Built production ML systems serving billions of users.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Former Staff Engineer at Stripe. Expert in scalable infrastructure and developer tools.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Lisa Johnson",
    role: "Head of Product", 
    bio: "Former Product Lead at Anthropic. Specialist in AI safety and user experience design.",
    image: "/api/placeholder/150/150"
  }
];

const advisors = [
  { name: "Dr. Andrew Ng", company: "Stanford AI Lab" },
  { name: "Daphne Koller", company: "insitro" },
  { name: "Pieter Abbeel", company: "UC Berkeley" }
];

const openRoles = [
  {
    title: "Senior AI Engineer",
    location: "San Francisco / Remote",
    department: "Engineering"
  },
  {
    title: "Product Marketing Manager",
    location: "San Francisco",
    department: "Marketing"
  },
  {
    title: "Developer Relations Engineer",
    location: "Remote",
    department: "Engineering"
  }
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
            We're building the future of AI development. Our mission is to make AI accessible, 
            transparent, and reliable for every product team.
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
                <div
                  key={principle.title}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-goftus-aqua/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-goftus-aqua" />
                  </div>
                  <div>
                    <h3 className="heading-sm text-foreground mb-3">{principle.title}</h3>
                    <p className="text-foreground-secondary leading-relaxed">{principle.description}</p>
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
            {timeline.map((item, index) => (
              <div key={item.year} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-goftus-aqua/10 border-2 border-goftus-aqua flex items-center justify-center">
                    <span className="text-goftus-aqua font-bold text-sm">{item.year}</span>
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
              World-class AI researchers and engineers from leading tech companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div
                key={person.name}
                className="text-center space-y-4"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-goftus-aqua/10 border border-border-subtle overflow-hidden">
                  {/* Placeholder for team member photo */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-goftus-aqua" />
                  </div>
                </div>
                <div>
                  <h3 className="heading-sm text-foreground">{person.name}</h3>
                  <p className="text-goftus-aqua font-medium text-sm mb-2">{person.role}</p>
                  <p className="text-foreground-secondary text-sm leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Advisors */}
          <div className="mt-20 text-center">
            <h3 className="heading-md text-foreground mb-8">Advisory Board</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="bg-card-elevated border border-border-subtle rounded-lg p-4 text-center"
                >
                  <p className="font-medium text-foreground text-sm">{advisor.name}</p>
                  <p className="text-foreground-secondary text-xs">{advisor.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-foreground">Join Our Team</h2>
            <p className="text-foreground-secondary text-lg">
              Help us build the future of AI development
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={`${role.title}-${role.location}`}
                className="flex items-center justify-between p-6 bg-card-elevated border border-border-subtle rounded-lg hover:border-goftus-aqua/30 transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="font-medium text-foreground">{role.title}</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-foreground-secondary text-sm">{role.location}</span>
                    <Badge variant="secondary" className="text-xs">
                      {role.department}
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground-secondary mb-6">
              Don't see the perfect role? We're always looking for exceptional talent.
            </p>
            <Button variant="hero" size="lg">
              Open Application
            </Button>
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
            <Button variant="hero" size="xl">
              Get started today
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}