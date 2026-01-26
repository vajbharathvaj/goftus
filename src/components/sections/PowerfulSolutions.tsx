import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes, Shield, Zap } from "lucide-react";

const solutions = [
  {
    title: "Rapid Agent Prototyping",
    description: "Build and optimize AI agents quickly using intuitive no-code tools, pre-built templates, and industry-specific solutions – enabling both technical and business users to build AI applications.",
    icon: Zap,
    accent: {
      ring: "bg-cyan-400/10",
      icon: "text-cyan-200",
      button: "bg-cyan-400 hover:bg-cyan-300 text-slate-950",
    },
  },
  {
    title: "Unified SaaS Platform Architecture", 
    description: "Orchestrate auth, billing, data, and messaging with pre-built integrations and open APIs—ship faster while keeping clean boundaries and zero vendor lock-in.",
    icon: Boxes, 
    accent: {
      ring: "bg-cyan-400/10",
      icon: "text-cyan-200",
      button: "bg-cyan-400 hover:bg-cyan-300 text-slate-950",
    },
  },
  {
    title: "Intelligent AI Operations",
    description: "Optimize AI performance and costs through smart routing, centralized lifecycle management– all while maintaining enterprise control and visibility.",
    icon: Shield,
    accent: {
      ring: "bg-cyan-400/10",
      icon: "text-cyan-200",
      button: "bg-cyan-400 hover:bg-cyan-300 text-slate-950",
    },
  },
];

export function PowerfulSolutions() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powerful solutions in an
            <br />
            <span className="text-cyan-200">all-in-one place.</span>
          </h2>
        </div>

        {/* Solutions */}
        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={solution.title} className="card-light p-8 card-hover rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(14,165,233,0.16)] backdrop-blur-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-full ${solution.accent.ring} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${solution.accent.icon}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>
                  
                  <div className="lg:col-span-2 flex items-center justify-between">
                    <p className="text-slate-300 leading-relaxed max-w-2xl">{solution.description}</p>
                    <Button 
                      size="icon"
                      className={`ml-6 flex-shrink-0 w-12 h-12 rounded-full ${solution.accent.button}`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Separator line except for last item */}
                {index < solutions.length - 1 && (
                  <div className="mt-8 pt-8 border-t border-white/10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
