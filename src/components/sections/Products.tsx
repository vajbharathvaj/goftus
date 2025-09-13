import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, ExternalLink, PlayCircle } from "lucide-react";

const products = [
  {
    name: "GOFTUS SDK",
    description: "Production-ready AI SDK with built-in observability",
    benefit: "Deploy AI features in minutes, not months",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Vector Pipeline API",
    description: "Scalable vector search and RAG infrastructure",
    benefit: "Handle millions of embeddings with ease",
    image: "/api/placeholder/400/300"
  },
  {
    name: "AI Workflow Engine",
    description: "Visual builder for complex AI agent workflows",
    benefit: "Create intelligent automations without code",
    image: "/api/placeholder/400/300"
  },
];

const codeExamples = {
  node: `// Initialize GOFTUS SDK
import { GOFTUS } from '@goftus/sdk';

const goftus = new GOFTUS({
  apiKey: process.env.GOFTUS_API_KEY,
  project: 'my-app'
});

// Create AI completion
const response = await goftus.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }],
  stream: true
});`,
  python: `# Initialize GOFTUS SDK
from goftus import GOFTUS

goftus = GOFTUS(
    api_key=os.getenv("GOFTUS_API_KEY"),
    project="my-app"
)

# Create AI completion
response = goftus.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=True
)`,
  curl: `# Create AI completion via cURL
curl -X POST "https://api.goftus.com/v1/chat/completions" \\
  -H "Authorization: Bearer $GOFTUS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true
  }'`
};

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
          {products.map((product, index) => (
            <div key={product.name} className="space-y-6">
              {/* Product Screenshot Mockup */}
              <div className="aspect-[4/3] rounded-xl bg-surface-elevated border border-border-subtle p-4">
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-goftus-aqua/10 to-goftus-aqua/5 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Code className="w-12 h-12 text-goftus-aqua mx-auto" />
                    <p className="text-sm font-medium text-foreground">{product.name}</p>
                    <p className="text-xs text-foreground-secondary">Interactive Demo</p>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="heading-sm text-foreground mb-2">{product.name}</h3>
                  <p className="text-foreground-secondary mb-3">{product.description}</p>
                  <p className="text-sm font-medium text-goftus-aqua">✨ {product.benefit}</p>
                </div>

                <div className="flex space-x-3">
                  <Button variant="hero" size="sm">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Try demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Docs
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="bg-card-elevated border border-border-subtle rounded-2xl p-8">
          <div className="mb-6">
            <h3 className="heading-sm text-foreground mb-2">Get started in seconds</h3>
            <p className="text-foreground-secondary">
              Integrate AI into your application with just a few lines of code
            </p>
          </div>

          <Tabs defaultValue="node" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
              <TabsTrigger value="node">Node.js</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>
            
            {Object.entries(codeExamples).map(([key, code]) => (
              <TabsContent key={key} value={key}>
                <div className="relative">
                  <pre className="bg-surface border border-border-subtle rounded-lg p-6 overflow-x-auto text-sm">
                    <code className="text-foreground-secondary">{code}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-8 w-8 p-0"
                    onClick={() => navigator.clipboard.writeText(code)}
                  >
                    <Code className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}