import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Settings } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Product Engineering",
    description: "From idea to production: we design, implement, and operate AI features that feel like magic.",
    href: "/services#ai-product-engineering"
  },
  {
    icon: Database,
    title: "Data & RAG Pipelines",
    description: "Build intelligent data workflows that power your AI applications with accuracy and speed.",
    href: "/services#data-pipelines"
  },
  {
    icon: Settings,
    title: "MLOps & Observability",
    description: "Monitor, optimize, and scale your AI systems with confidence and complete visibility.",
    href: "/services#mlops"
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg text-foreground">What GOFTUS Does</h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            From idea to production: we design, implement, and operate AI features that feel like magic.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group card-hover bg-card-elevated border border-border-subtle rounded-2xl p-8 hover:border-goftus-aqua/20"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-goftus-aqua/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-goftus-aqua" />
                  </div>
                  <h3 className="heading-sm text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground-secondary leading-relaxed">{service.description}</p>
                </div>
                
                <Button
                  variant="ghost"
                  className="group-hover:text-goftus-aqua transition-colors p-0 h-auto font-medium"
                  asChild
                >
                  <a href={service.href}>
                    Explore service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}