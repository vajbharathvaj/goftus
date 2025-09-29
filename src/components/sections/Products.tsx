import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, ExternalLink, PlayCircle, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

/* --------- Product cards (images not demos) --------- */
const products = [
  {
    name: "Flagen AI ",
    description: "Production-ready SDK with built-in auth, keys, and usage metering.",
    benefit: "Ship AI features in minutes—not months.",
    image: "/products/flagen.jpg",
  },
  {
    name: "Flagen AI — Observability & Guardrails",
    description:
      "Full tracing for prompts and tools, red-teaming, evals, rate limits, and policy enforcement.",
    benefit: "Catch regressions before they reach prod.",
    image: "/products/flagen2.jpg",
  },
  {
    name: "Flagen AI — Workflows & Orchestration",
    description:
      "Composable steps, function calling, retries, and parallel tools for reliable agent flows.",
    benefit: "Build robust automations without glue code.",
    image: "/products/flagen3.jpg",
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
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border-subtle bg-surface-elevated">
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
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-goftus-aqua/10 to-goftus-aqua/5">
          <div className="text-center text-foreground-secondary">
            <ImageIcon className="mx-auto mb-2 h-8 w-8 text-goftus-aqua" />
            <p className="text-sm">Preview unavailable</p>
          </div>
        </div>
      )}

      {/* soft ring + optional caption */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-border-subtle/50 rounded-xl" />
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
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg text-foreground">Products Snapshot</h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Battle-tested tools that power AI applications in production
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {products.map((product) => (
            <div key={product.name} className="space-y-6">
              <ProductImage
                src={product.image}
                alt={`${product.name} preview`}
                caption={product.name}
              />

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="heading-sm text-foreground mb-2">{product.name}</h3>
                  <p className="text-foreground-secondary mb-3">
                    {product.description}
                  </p>
                  <p className="text-sm font-medium text-goftus-aqua">
                    ✨ {product.benefit}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button variant="hero" size="sm">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    <Link to="https://flagenai.goftus.com">
                    Try demo
                    </Link>
                  </Button>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Code Example (GOFTUS overview – no real SDK/API needed) */}
        <div className="bg-card-elevated border border-border-subtle rounded-2xl p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="heading-sm text-foreground mb-2">Get started in seconds</h3>
              <p className="text-foreground-secondary">
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
                <pre className="bg-surface border border-border-subtle rounded-lg p-6 overflow-x-auto text-sm">
                  <code className="text-foreground-secondary whitespace-pre-wrap">
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
