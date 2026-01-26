import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Settings, 
  Lightbulb, 
  Rocket, 
  Shield,
  X,
  CheckCircle 
} from "lucide-react";

const services = [
  {
    id: "ai-strategy",
    icon: Lightbulb,
    title: "AI Product Strategy",
    subtitle: "Strategic roadmap for AI integration",
    scope: [
      "AI opportunity assessment",
      "Technical feasibility analysis", 
      "ROI modeling and business case",
      "Technology stack recommendations"
    ],
    deliverables: [
      "Comprehensive AI strategy document",
      "Technical architecture blueprint",
      "Implementation roadmap with milestones",
      "Risk assessment and mitigation plan"
    ],
    timeline: "2-4 weeks",
    successMetrics: [
      "Clear go-to-market strategy",
      "Validated technical approach",
      "Budget and resource planning"
    ]
  },
  {
    id: "prototyping",
    icon: Rocket,
    title: "Prototyping & PoCs",
    subtitle: "Validate concepts before full development",
    scope: [
      "Rapid prototype development",
      "User testing and feedback integration",
      "Performance benchmarking",
      "Technical debt assessment"
    ],
    deliverables: [
      "Working prototype or MVP",
      "User testing results and insights",
      "Technical documentation",
      "Production readiness assessment"
    ],
    timeline: "1-3 weeks",
    successMetrics: [
      "Proven concept validation",
      "User acceptance metrics",
      "Clear path to production"
    ]
  },
  {
    id: "rag-pipelines",
    icon: Database,
    title: "RAG/Vector Search & Data Ingest",
    subtitle: "Intelligent data processing at scale",
    scope: [
      "Data pipeline architecture",
      "Vector database optimization",
      "Retrieval system tuning",
      "Real-time data ingestion"
    ],
    deliverables: [
      "Production-ready data pipeline",
      "Optimized vector search system",
      "Monitoring and alerting setup",
      "Performance optimization guide"
    ],
    timeline: "2-6 weeks",
    successMetrics: [
      "Sub-100ms query response",
      "99.9% pipeline uptime",
      "Scalable to millions of documents"
    ]
  },
  {
    id: "workflows",
    icon: Brain,
    title: "Agentic Workflows & Tools",
    subtitle: "Autonomous AI systems and automation",
    scope: [
      "Multi-agent system design",
      "Tool integration and orchestration",
      "Workflow optimization",
      "Human-in-the-loop systems"
    ],
    deliverables: [
      "Production agent workflows",
      "Tool integration framework",
      "Monitoring and control systems",
      "Scaling and optimization guide"
    ],
    timeline: "3-8 weeks",
    successMetrics: [
      "Autonomous task completion",
      "Cost-effective operations",
      "Reliable error handling"
    ]
  },
  {
    id: "mlops",
    icon: Settings,
    title: "MLOps, Evals & Cost Control",
    subtitle: "Production ML operations and monitoring",
    scope: [
      "Model deployment automation",
      "Performance monitoring setup",
      "A/B testing frameworks",
      "Cost optimization strategies"
    ],
    deliverables: [
      "Automated MLOps pipeline",
      "Real-time monitoring dashboard",
      "Evaluation and testing suite",
      "Cost optimization framework"
    ],
    timeline: "2-5 weeks",
    successMetrics: [
      "Automated model deployment",
      "30% cost reduction",
      "Real-time performance tracking"
    ]
  },
  {
    id: "security",
    icon: Shield,
    title: "Security, SSO/SAML & Governance",
    subtitle: "Enterprise-grade security and compliance",
    scope: [
      "Security architecture design",
      "Identity management integration",
      "Compliance framework setup",
      "Audit and governance systems"
    ],
    deliverables: [
      "Security implementation guide",
      "SSO/SAML integration",
      "Compliance documentation",
      "Audit trail systems"
    ],
    timeline: "1-4 weeks",
    successMetrics: [
      "SOC 2 compliance readiness",
      "Zero security incidents",
      "Automated compliance reporting"
    ]
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  const service = selectedService ? services.find(s => s.id === selectedService) : null;

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">Services</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            From idea to production: we design, implement, and operate AI features that feel like magic.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group card-hover bg-card-elevated border border-border-subtle rounded-2xl p-8 cursor-pointer hover:border-cyan-400/40"
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4 border border-cyan-400/30">
                      <IconComponent className="w-6 h-6 text-cyan-200" />
                    </div>
                    <h3 className="heading-sm text-foreground mb-2">{service.title}</h3>
                    <p className="text-foreground-secondary text-sm mb-4">{service.subtitle}</p>
                    <Badge variant="secondary" className="text-xs">
                      {service.timeline}
                    </Badge>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="group-hover:text-cyan-200 transition-colors p-0 h-auto font-medium text-sm"
                  >
                    Learn more →
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Drawer */}
      {service && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end justify-center p-4">
          <div className="w-full max-w-4xl bg-card-elevated border border-border-subtle rounded-2xl p-8 max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
                  <service.icon className="w-6 h-6 text-cyan-200" />
                </div>
                <div>
                  <h2 className="heading-md text-foreground">{service.title}</h2>
                  <p className="text-foreground-secondary">{service.subtitle}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedService(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="heading-sm text-foreground mb-4">Scope</h3>
                  <ul className="space-y-2">
                    {service.scope.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-200 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-secondary text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="heading-sm text-foreground mb-4">Deliverables</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-200 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-secondary text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="heading-sm text-foreground mb-4">Timeline</h3>
                  <div className="bg-surface rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-200 mb-1">{service.timeline}</div>
                    <p className="text-foreground-secondary text-sm">Typical delivery time</p>
                  </div>
                </div>

                <div>
                  <h3 className="heading-sm text-foreground mb-4">Success Metrics</h3>
                  <ul className="space-y-2">
                    {service.successMetrics.map((metric, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-200 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-secondary text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button variant="hero" size="lg" className="w-full">
                    Request proposal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
