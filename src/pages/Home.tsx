import { PurpleHero } from "@/components/sections/PurpleHero";
import { ProductLaunchBanner } from "@/components/sections/ProductLaunchBanner";
import { IntegrationsStrip } from "@/components/sections/IntegrationsStrip";
import { ArchitectureBlocks } from "@/components/sections/ArchitectureBlocks";
import { PowerfulSolutions } from "@/components/sections/PowerfulSolutions";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Button } from "@/components/ui/button";
import { TrendingDown, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

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
    <main className="relative min-h-screen overflow-hidden bg-[#050f1b] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/16 blur-3xl" />
        <div className="absolute top-8 right-0 h-[30rem] w-[30rem] rounded-full bg-sky-500/16 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-blue-600/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(2,10,18,0.96)_0%,_rgba(4,16,28,0.98)_55%,_rgba(1,6,12,0.995)_100%)]" />
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+CiAgPGZpbHRlciBpZD0ibiI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiAvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMiIgLz4KPC9zdmc+')]" />
      </div>
      <div className="relative">
      <PurpleHero />
      <ArchitectureBlocks />
      <IntegrationsStrip />
      <ProductLaunchBanner />
      <PowerfulSolutions />
      <Services />
      <Products />
      
      {/* Why GOFTUS - Metrics */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-white">Why GOFTUS</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Measurable impact on your AI development lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center space-y-4 shadow-[0_25px_70px_rgba(14,165,233,0.16)] backdrop-blur-2xl"
                >
                  <div className="w-16 h-16 mx-auto rounded-full border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-cyan-200" />
                  </div>
                  <div>
                    <div className="heading-md text-cyan-200 mb-2">{metric.value}</div>
                    <h3 className="heading-sm text-white mb-1">{metric.label}</h3>
                    <p className="text-sm text-slate-300">{metric.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-12 shadow-[0_30px_80px_rgba(14,165,233,0.2)] backdrop-blur-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="heading-md text-white">From 6 months to 2 weeks</h3>
                  <p className="text-slate-300 leading-relaxed">
                    "GOFTUS helped us ship our AI-powered search feature in just 2 weeks. 
                    What would have taken our team 6 months to build and deploy, they 
                    delivered with production-ready observability and 99.9% uptime."
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center">
                    <span className="text-cyan-200 font-medium text-sm">JD</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Jane Doe</p>
                    <p className="text-sm text-slate-300">CTO, TechCorp</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-cyan-200 mb-1">Before</div>
                    <div className="text-sm text-slate-300">6 months</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-cyan-200 mb-1">After</div>
                    <div className="text-sm text-slate-300">2 weeks</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-200">12x faster</div>
                  <p className="text-sm text-slate-300 mt-1">time to market</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-white">Security & Compliance</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Enterprise-grade security built into every layer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(14,165,233,0.16)] backdrop-blur-2xl">
              <div className="w-16 h-16 mx-auto rounded-full border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-cyan-200" />
              </div>
              <h3 className="heading-sm text-white">End-to-end Encryption</h3>
              <p className="text-sm text-slate-300">
                AES-256 encryption for data at rest and in transit
              </p>
            </div>

            <div className="text-center space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(14,165,233,0.16)] backdrop-blur-2xl">
              <div className="w-16 h-16 mx-auto rounded-full border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-cyan-200" />
              </div>
              <h3 className="heading-sm text-white">SSO & SAML</h3>
              <p className="text-sm text-slate-300">
                Enterprise identity management and access controls
              </p>
            </div>

            <div className="text-center space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(14,165,233,0.16)] backdrop-blur-2xl">
              <div className="w-16 h-16 mx-auto rounded-full border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-cyan-200" />
              </div>
              <h3 className="heading-sm text-white">Audit Logs</h3>
              <p className="text-sm text-slate-300">
                Complete visibility into all system activities
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full border-cyan-400/40 bg-white/5 text-cyan-200 hover:bg-cyan-400/10">
              <Link to="/security">
              View Security Details
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="heading-lg text-white">Start free. Scale as you grow.</h2>
            <p className="text-lg text-slate-300">
              No upfront costs. Pay only for what you use.
            </p>
            <Button variant="hero" size="xl" className="rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:bg-cyan-300">
              <Link to='products'>
              View Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-cyan-400/30 bg-white/5 p-12 shadow-[0_30px_80px_rgba(14,165,233,0.2)] backdrop-blur-2xl">
            <div className="space-y-6">
              <h2 className="heading-lg text-white">Ready to transform your AI development?</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Join hundreds of teams building the future with GOFTUS. 
                Get started today and ship AI features that your users will love.
              </p>
              <Button variant="hero" size="xl" className="rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:bg-cyan-300">
                <Link to="contact">
                Get a quote
                </Link>
              </Button>
              <p className="text-sm text-slate-400">
                5-minute setup • No credit card required • SOC 2 compliant
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
