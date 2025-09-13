import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code2, 
  Database, 
  GitBranch, 
  PlayCircle, 
  ExternalLink, 
  CheckCircle,
  Copy
} from "lucide-react";

const products = [
  {
    id: "goftus-sdk",
    name: "GOFTUS SDK",
    description: "Production-ready AI SDK with built-in observability and monitoring",
    image: "/api/placeholder/600/400",
    benefits: [
      "Deploy AI features in minutes, not months",
      "Built-in monitoring and cost tracking", 
      "99.9% uptime SLA with automatic failover"
    ],
    codeExamples: {
      node: `// Initialize GOFTUS SDK
import { GOFTUS } from '@goftus/sdk';

const goftus = new GOFTUS({
  apiKey: process.env.GOFTUS_API_KEY,
  project: 'my-app'
});

// Create AI completion with monitoring
const response = await goftus.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }],
  stream: true,
  metadata: { userId: 'user-123', feature: 'chat' }
});`,
      python: `# Initialize GOFTUS SDK
from goftus import GOFTUS

goftus = GOFTUS(
    api_key=os.getenv("GOFTUS_API_KEY"),
    project="my-app"
)

# Create AI completion with monitoring
response = goftus.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=True,
    metadata={"user_id": "user-123", "feature": "chat"}
)`,
      curl: `# Create AI completion via REST API
curl -X POST "https://api.goftus.com/v1/chat/completions" \\
  -H "Authorization: Bearer $GOFTUS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true,
    "metadata": {"user_id": "user-123", "feature": "chat"}
  }'`
    }
  },
  {
    id: "vector-pipeline",
    name: "Vector Pipeline API", 
    description: "Scalable vector search and RAG infrastructure that handles millions of documents",
    image: "/api/placeholder/600/400",
    benefits: [
      "Handle millions of embeddings with sub-100ms queries",
      "Automatic data sync and real-time updates",
      "Multi-modal search (text, images, audio)"
    ],
    codeExamples: {
      node: `// Vector Pipeline SDK
import { VectorPipeline } from '@goftus/vector';

const pipeline = new VectorPipeline({
  apiKey: process.env.GOFTUS_API_KEY,
  index: 'documents'
});

// Index documents with metadata
await pipeline.upsert({
  id: 'doc-123',
  content: 'Product documentation...',
  metadata: { category: 'docs', version: '2.1' }
});

// Semantic search
const results = await pipeline.search({
  query: 'How to integrate webhooks?',
  limit: 5,
  filter: { category: 'docs' }
});`,
      python: `# Vector Pipeline SDK
from goftus.vector import VectorPipeline

pipeline = VectorPipeline(
    api_key=os.getenv("GOFTUS_API_KEY"),
    index="documents"
)

# Index documents with metadata
pipeline.upsert({
    "id": "doc-123",
    "content": "Product documentation...",
    "metadata": {"category": "docs", "version": "2.1"}
})

# Semantic search
results = pipeline.search({
    "query": "How to integrate webhooks?",
    "limit": 5,
    "filter": {"category": "docs"}
})`,
      curl: `# Vector search via REST API
curl -X POST "https://api.goftus.com/v1/vector/search" \\
  -H "Authorization: Bearer $GOFTUS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "index": "documents",
    "query": "How to integrate webhooks?",
    "limit": 5,
    "filter": {"category": "docs"}
  }'`
    }
  },
  {
    id: "workflow-engine",
    name: "AI Workflow Engine",
    description: "Visual builder for complex AI agent workflows and automation",
    image: "/api/placeholder/600/400", 
    benefits: [
      "Create intelligent automations without code",
      "Multi-agent coordination and task distribution",
      "Human-in-the-loop approval workflows"
    ],
    codeExamples: {
      node: `// Workflow Engine SDK
import { WorkflowEngine } from '@goftus/workflow';

const engine = new WorkflowEngine({
  apiKey: process.env.GOFTUS_API_KEY
});

// Define workflow
const workflow = await engine.create({
  name: 'customer-support',
  triggers: ['email', 'chat'],
  steps: [
    { type: 'classify', model: 'gpt-4' },
    { type: 'route', conditions: {...} },
    { type: 'respond', template: 'support-response' }
  ]
});

// Execute workflow
const result = await workflow.execute({
  input: 'Customer needs help with billing',
  context: { userId: 'user-123' }
});`,
      python: `# Workflow Engine SDK
from goftus.workflow import WorkflowEngine

engine = WorkflowEngine(
    api_key=os.getenv("GOFTUS_API_KEY")
)

# Define workflow
workflow = engine.create({
    "name": "customer-support",
    "triggers": ["email", "chat"],
    "steps": [
        {"type": "classify", "model": "gpt-4"},
        {"type": "route", "conditions": {...}},
        {"type": "respond", "template": "support-response"}
    ]
})

# Execute workflow
result = workflow.execute({
    "input": "Customer needs help with billing",
    "context": {"user_id": "user-123"}
})`,
      curl: `# Execute workflow via REST API
curl -X POST "https://api.goftus.com/v1/workflows/execute" \\
  -H "Authorization: Bearer $GOFTUS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workflow_id": "customer-support",
    "input": "Customer needs help with billing",
    "context": {"user_id": "user-123"}
  }'`
    }
  }
];

const comparisonFeatures = [
  { feature: "Real-time monitoring", goftus: true, others: false },
  { feature: "Built-in cost tracking", goftus: true, others: false },
  { feature: "Multi-provider support", goftus: true, others: true },
  { feature: "Visual workflow builder", goftus: true, others: false },
  { feature: "Enterprise security", goftus: true, others: true },
  { feature: "99.9% uptime SLA", goftus: true, others: false },
];

export default function Products() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">Products</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Battle-tested tools that power AI applications in production. 
            From SDKs to infrastructure, everything you need to ship AI features fast.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id} 
          className={`py-24 ${index % 2 === 0 ? 'bg-surface' : 'bg-background'}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {product.name}
                  </Badge>
                  <h2 className="heading-lg text-foreground mb-4">{product.name}</h2>
                  <p className="text-foreground-secondary text-lg mb-6">{product.description}</p>
                </div>

                <div className="space-y-3">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-goftus-aqua mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button variant="hero">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Try demo
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Documentation
                  </Button>
                </div>
              </div>

              {/* Code Example */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-card-elevated border border-border-subtle rounded-2xl p-6">
                  <div className="mb-4">
                    <h3 className="heading-sm text-foreground mb-2">Quick Start</h3>
                    <p className="text-foreground-secondary text-sm">
                      Get started with {product.name} in seconds
                    </p>
                  </div>

                  <Tabs defaultValue="node" className="w-full">
                    <TabsList className="grid w-full max-w-md grid-cols-3 mb-4">
                      <TabsTrigger value="node">Node.js</TabsTrigger>
                      <TabsTrigger value="python">Python</TabsTrigger>
                      <TabsTrigger value="curl">cURL</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(product.codeExamples).map(([key, code]) => (
                      <TabsContent key={key} value={key}>
                        <div className="relative">
                          <pre className="bg-surface border border-border-subtle rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
                            <code className="text-foreground-secondary">{code}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 h-8 w-8 p-0"
                            onClick={() => copyToClipboard(code)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-lg text-foreground">Why choose GOFTUS?</h2>
            <p className="text-foreground-secondary text-lg">
              See how we compare to other solutions
            </p>
          </div>

          <div className="bg-card-elevated border border-border-subtle rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-border-subtle">
              {/* Header */}
              <div className="bg-card-elevated p-6">
                <h3 className="heading-sm text-foreground">Feature</h3>
              </div>
              <div className="bg-card-elevated p-6 text-center">
                <div className="w-8 h-8 gradient-bg-aqua rounded-lg flex items-center justify-center mx-auto mb-2">
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
                      <CheckCircle className="w-5 h-5 text-goftus-aqua mx-auto" />
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

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Start building today
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}