import { PurpleHero } from "@/components/sections/PurpleHero";
import { ProductLaunchBanner } from "@/components/sections/ProductLaunchBanner";
import { IntegrationsStrip } from "@/components/sections/IntegrationsStrip";
import { ArchitectureBlocks } from "@/components/sections/ArchitectureBlocks";
import { PowerfulSolutions } from "@/components/sections/PowerfulSolutions";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Button } from "@/components/ui/button";
import { TrendingDown, Zap, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    label: "cost",
    value: "↓ 60%",
    description: "Reduce AI infrastructure costs"
  },
  {
    icon: TrendingDown,
    label: "latency", 
    value: "↓ 40%",
    description: "Faster response times"
  },
  {
    icon: TrendingUp,
    label: "ship speed",
    value: "↑ 300%",
    description: "Deploy AI features faster"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <PurpleHero />
      <ArchitectureBlocks />
      <IntegrationsStrip />
      <ProductLaunchBanner />
      <PowerfulSolutions />
      <Services />
      <Products />
      
      {/* Why GOFTUS - Metrics */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-foreground">Why GOFTUS</h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              Measurable impact on your AI development lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-goftus-aqua/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-goftus-aqua" />
                  </div>
                  <div>
                    <div className="heading-md text-goftus-aqua mb-2">{metric.value}</div>
                    <h3 className="heading-sm text-foreground mb-1">{metric.label}</h3>
                    <p className="text-foreground-secondary text-sm">{metric.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-card-elevated border border-border-subtle rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="heading-md text-foreground">From 6 months to 2 weeks</h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    "GOFTUS helped us ship our AI-powered search feature in just 2 weeks. 
                    What would have taken our team 6 months to build and deploy, they 
                    delivered with production-ready observability and 99.9% uptime."
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-goftus-aqua/20 flex items-center justify-center">
                    <span className="text-goftus-aqua font-medium text-sm">JD</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Jane Doe</p>
                    <p className="text-sm text-foreground-secondary">CTO, TechCorp</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-surface rounded-xl">
                    <div className="text-2xl font-bold text-signal-orange mb-1">Before</div>
                    <div className="text-sm text-foreground-secondary">6 months</div>
                  </div>
                  <div className="text-center p-6 bg-surface rounded-xl">
                    <div className="text-2xl font-bold text-goftus-aqua mb-1">After</div>
                    <div className="text-sm text-foreground-secondary">2 weeks</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-aqua">12x faster</div>
                  <p className="text-sm text-foreground-secondary mt-1">time to market</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-foreground">Security & Compliance</h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              Enterprise-grade security built into every layer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-goftus-aqua/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-goftus-aqua" />
              </div>
              <h3 className="heading-sm text-foreground">End-to-end Encryption</h3>
              <p className="text-foreground-secondary text-sm">
                AES-256 encryption for data at rest and in transit
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-goftus-aqua/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-goftus-aqua" />
              </div>
              <h3 className="heading-sm text-foreground">SSO & SAML</h3>
              <p className="text-foreground-secondary text-sm">
                Enterprise identity management and access controls
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-goftus-aqua/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-goftus-aqua" />
              </div>
              <h3 className="heading-sm text-foreground">Audit Logs</h3>
              <p className="text-foreground-secondary text-sm">
                Complete visibility into all system activities
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View Security Details
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="heading-lg text-foreground">Start free. Scale as you grow.</h2>
            <p className="text-foreground-secondary text-lg">
              No upfront costs. Pay only for what you use.
            </p>
            <Button variant="hero" size="xl">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="bg-card-elevated border-2 border-goftus-aqua/20 rounded-2xl p-12 glow-aqua-subtle">
            <div className="space-y-6">
              <h2 className="heading-lg gradient-aqua">Ready to transform your AI development?</h2>
              <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
                Join hundreds of teams building the future with GOFTUS. 
                Get started today and ship AI features that your users will love.
              </p>
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                Get a quote
              </Button>
              <p className="text-sm text-foreground-muted">
                5-minute setup • No credit card required • SOC 2 compliant
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}