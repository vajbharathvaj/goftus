import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Database, Shield } from "lucide-react";

const solutions = [
  {
    title: "Rapid Agent Prototyping",
    description: "Build and optimize AI agents quickly using intuitive no-code tools, pre-built templates, and industry-specific solutions – enabling both technical and business users to build AI applications.",
    icon: Zap,
    color: "goftus-orange",
  },
  {
    title: "Data Integration Architecture", 
    description: "Connect seamlessly to your existing enterprise applications and data sources through pre-built connectors and extensible APIs, while also maintaining freedom to use any AI model without vendor lock-in.",
    icon: Database,
    color: "goftus-aqua",
  },
  {
    title: "Intelligent AI Operations",
    description: "Optimize AI performance and costs through smart routing, centralized lifecycle management– all while maintaining enterprise control and visibility.",
    icon: Shield,
    color: "goftus-orange",
  },
];

export function PowerfulSolutions() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-heading mb-6 leading-tight">
            Powerful solutions in an
            <br />
            <span className="gradient-aqua">all-in-one platform.</span>
          </h2>
        </div>

        {/* Solutions */}
        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={solution.title} className="card-light p-8 card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-full bg-${solution.color}/10 flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-${solution.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-heading">{solution.title}</h3>
                  </div>
                  
                  <div className="lg:col-span-2 flex items-center justify-between">
                    <p className="text-body leading-relaxed max-w-2xl">{solution.description}</p>
                    <Button 
                      size="icon"
                      className={`ml-6 flex-shrink-0 w-12 h-12 rounded-full bg-${solution.color} hover:bg-${solution.color}-hover text-white`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Separator line except for last item */}
                {index < solutions.length - 1 && (
                  <div className="mt-8 pt-8 border-t border-border"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}