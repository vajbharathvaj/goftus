import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Code, Image as ImageIcon } from "lucide-react";

/* --------- Product cards (images not demos) --------- */
const products = [
  {
    id: "callflow",
    name: "CallFlow AI",
    description:
      "An intelligent call analysis platform that transforms customer conversations into actionable business insights in real time.",
    image: "/products/call-flow.png",
    url: "https://callflow.goftus.com/",
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
    image: "/products/saim.png",
    url: "https://www.saim.ai/",
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

/* --------- Image renderer with graceful fallback --------- */
function ProductImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(14,165,233,0.12)] backdrop-blur-2xl">
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-cyan-400/10 to-blue-600/10">
          <div className="text-center text-slate-300">
            <ImageIcon className="mx-auto mb-2 h-8 w-8 text-cyan-200" />
            <p className="text-sm">Preview unavailable</p>
          </div>
        </div>
      )}

      {/* soft ring + optional caption */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-xl" />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3">
          <p className="text-xs font-medium text-white/90">{caption}</p>
        </div>
      )}
    </div>
  );
}

/* --------- Faux “code” snippet for the GOFTUS tab --------- */
const codeGoftus = `// GOFTUS — Why teams choose us
const goftusAdvantages = [
  "Production-ready SDK with auth & keys",
  "Observability, tracing & guardrails",
  "Workflow orchestration for reliable agents",
  "Model-agnostic — no vendor lock-in",
  "Usage metering & billing hooks built in",
  "Enterprise security & governance"
];

for (const point of goftusAdvantages) {
  console.log("• " + point);
}

// Output:
// • Production-ready SDK with auth & keys
// • Observability, tracing & guardrails
// • Workflow orchestration for reliable agents
// • Model-agnostic — no vendor lock-in
// • Usage metering & billing hooks built in
// • Enterprise security & governance
`;

export function Products() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg text-white">Products Snapshot</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Battle-tested tools that power AI applications in production
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noreferrer"
              className="group space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,12,23,0.45)] transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <ProductImage
                src={product.image}
                alt={`${product.name} preview`}
                caption={product.name}
              />

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cyan-100/90">
                    Product snapshot
                  </div>
                  <h3 className="heading-sm text-white mb-3">{product.name}</h3>
                  <p className="text-slate-200/90 text-[15px] leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="grid gap-4 border-t border-white/10 pt-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80 mb-2">
                      Benefits
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2">
                          <span className="text-cyan-200">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80 mb-2">
                      Flow
                    </p>
                    <ol className="space-y-2 text-sm text-slate-300">
                      {product.flow.map((step, index) => (
                        <li key={step} className="flex gap-2">
                          <span className="text-cyan-200">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="text-sm text-cyan-200/90 underline underline-offset-4">
                  Visit website →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Code Example (GOFTUS overview – no real SDK/API needed) */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(14,165,233,0.16)] backdrop-blur-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="heading-sm text-white mb-2">Get started in seconds</h3>
              <p className="text-slate-300">
                See what you get with GOFTUS at a glance — same beautiful panel, no SDK required.
              </p>
            </div>
            <span className="text-[11px] px-2 py-1 rounded bg-white/10 border border-white/15 text-white/80">
              Overview • No integration needed
            </span>
          </div>

          <Tabs defaultValue="goftus" className="w-full">
            <TabsList className="w-fit mb-6">
              <TabsTrigger value="goftus">GOFTUS</TabsTrigger>
            </TabsList>

            <TabsContent value="goftus">
              <div className="relative">
                <pre className="bg-[#050a1f] border border-white/10 rounded-lg p-6 overflow-x-auto text-sm">
                  <code className="text-slate-300 whitespace-pre-wrap">
                    {codeGoftus}
                  </code>
                </pre>
                <Button
                  aria-label="Copy code"
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 h-8 w-8 p-0"
                  onClick={() => navigator.clipboard.writeText(codeGoftus)}
                >
                  <Code className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
