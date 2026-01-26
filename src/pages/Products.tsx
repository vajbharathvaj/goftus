import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Copy } from "lucide-react";

// Your existing products list (unchanged)
const products = [

  {
    id: "callflow",
    name: "CallFlow AI",
    description:
      "An intelligent call analysis platform that transforms customer conversations into actionable business insights in real time.",
    image: "/api/placeholder/600/400",
    benefits: [
      "Automatically transcribe and analyze sales and support calls",
      "Detect customer intent, objections, and sentiment instantly",
      "Improve conversions and customer experience with AI-driven insights",
    ],
    flow: [
      "Customer calls are securely captured or uploaded",
      "AI transcribes and analyzes conversations in real time",
      "Key insights, summaries, and performance signals appear in a unified dashboard",
    ],
  },

  {
    id: "saim-ai",
    name: "Saim AI – Business Plan Maker",
    description:
      "An AI-powered business planning tool that helps founders and teams turn ideas into structured, investor-ready business plans.",
    image: "/api/placeholder/600/400",
    benefits: [
      "Create complete business plans in minutes, not weeks",
      "Built-in market analysis, positioning, and growth strategy",
      "Clear, professional outputs ready for investors and stakeholders",
    ],
    flow: [
      "User describes their idea or existing business in simple steps",
      "AI analyzes the market, competition, and business model",
      "A structured, editable business plan is generated instantly",
    ],
  },
];


// Build a nice “code-like” snippet per product
function buildGoftusSnippet(p: {
  name: string;
  description: string;
  benefits: string[];
}) {
  const bullets = p.benefits.map((b) => `    "• ${b}"`).join(",\n");
  return `// GOFTUS — ${p.name}
// (overview snippet — copy & share)

const GOFTUS = {
  mission: "Build scalable, robust AI solutions and products across the country.",
  product: "${p.name}",
  description: "${p.description}",
  strengths: [
${bullets}
  ],
  pillars: [
    "Enterprise security (AES-256 at rest, TLS 1.2+)",
    "Observability & audit trails by default",
    "Model-agnostic — no vendor lock-in"
  ],
  contact: "hello@goftus.com",
  website: "goftus.com"
};

// Pretty print
console.table(GOFTUS.strengths);
// Tip: Share this with your team to align on what ${p.name} delivers.`;
}

const comparisonFeatures = [
  { feature: "Real-time monitoring", goftus: true, others: false },
  { feature: "Built-in cost tracking", goftus: true, others: false },
  { feature: "Multi-provider support", goftus: true, others: true },
  { feature: "Visual workflow builder", goftus: true, others: false },
  { feature: "Enterprise security", goftus: true, others: true },
  { feature: "99.9% uptime SLA", goftus: true, others: false },
];

export default function Products() {
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">Features</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Battle-tested tools that power AI applications in production. From SDKs to
            infrastructure, everything you need to ship AI features fast.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => {
        const snippet = buildGoftusSnippet(product);
        return (
          <section
            key={product.id}
            className={`py-24 ${index % 2 === 0 ? "bg-surface" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Product Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      {product.name}
                    </Badge>
                    <h2 className="heading-lg text-foreground mb-4">{product.name}</h2>
                    <p className="text-foreground-secondary text-lg mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-200 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs removed as requested */}
                </div>

                {/* Code Example — single GOFTUS tab */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-card-elevated border border-border-subtle rounded-2xl p-6">
                    <div className="mb-4">
                      <h3 className="heading-sm text-foreground mb-2">GOFTUS</h3>
                      <p className="text-foreground-secondary text-sm">
                        Snapshot of {product.name} in a friendly code-style format
                      </p>
                    </div>

                    <Tabs defaultValue="goftus" className="w-full">
                      <TabsList className="w-fit mb-4">
                        <TabsTrigger value="goftus">GOFTUS</TabsTrigger>
                      </TabsList>

                      <TabsContent value="goftus">
                        <div className="relative">
                          <pre className="bg-surface border border-border-subtle rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
                            <code className="text-foreground-secondary whitespace-pre-wrap">
                              {snippet}
                            </code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 h-8 w-8 p-0"
                            onClick={() => copyToClipboard(snippet)}
                            aria-label="Copy GOFTUS snippet"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Comparison Table (unchanged) */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-foreground">Why choose GOFTUS?</h2>
            <p className="text-foreground-secondary text-lg">
              See how we compare to other solutions
            </p>
          </div>

          <div className="bg-card-elevated border border-border-subtle rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <div className="grid min-w-[720px] grid-cols-3 gap-px bg-border-subtle">
              {/* Header */}
              <div className="bg-card-elevated p-6">
                <h3 className="heading-sm text-foreground">Feature</h3>
              </div>
              <div className="bg-card-elevated p-6 text-center">
                <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <h3 className="heading-sm text-foreground">GOFTUS</h3>
              </div>
              <div className="bg-card-elevated p-6 text-center">
                <h3 className="heading-sm text-foreground-secondary">Others</h3>
              </div>

              {/* Features */}
              {comparisonFeatures.map((row, index) => (
                <React.Fragment key={index}>
                  <div className="bg-card-elevated p-6">
                    <span className="text-foreground">{row.feature}</span>
                  </div>
                  <div className="bg-card-elevated p-6 text-center">
                    {row.goftus ? (
                      <CheckCircle className="w-5 h-5 text-cyan-200 mx-auto" />
                    ) : (
                      <span className="text-foreground-muted">—</span>
                    )}
                  </div>
                  <div className="bg-card-elevated p-6 text-center">
                    {row.others ? (
                      <CheckCircle className="w-5 h-5 text-foreground-muted mx-auto" />
                    ) : (
                      <span className="text-foreground-muted">—</span>
                    )}
                  </div>
                </React.Fragment>
              ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-foreground-secondary">
              Built with transparency and security in mind.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
