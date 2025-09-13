import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, CheckCircle, AlertTriangle } from "lucide-react";

export function HeroLight() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Text */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-heading leading-tight">
              The Enterprise AI
              <br />
              Orchestration
              <br />
              Platform with
              <br />
              <span className="gradient-aqua">Integrations</span>
            </h1>
            
            <p className="text-xl text-body leading-relaxed max-w-lg">
              Easily build and deploy secure, intelligent workflows across your 
              organization. Smart AI to accelerate AI initiatives across the organization 
              with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="animate-magnetic">
                Get a Demo
              </Button>
              <Button variant="link" className="text-goftus-aqua hover:text-goftus-aqua-hover">
                Learn more →
              </Button>
            </div>
          </div>

          {/* Right Column - UI Blocks */}
          <div className="space-y-6 animate-float">
            {/* Security & Data Governance Card */}
            <div className="card-light p-6 space-y-4 relative">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-goftus-aqua" />
                <h3 className="font-semibold text-heading">Security & Data Governance</h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-goftus-aqua rounded-full"></div>
                  <span className="text-sm text-body">Prompt Injection & Jailbreak Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-goftus-aqua rounded-full"></div>
                  <span className="text-sm text-body">Keyword Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-goftus-aqua rounded-full"></div>
                  <span className="text-sm text-body">Standard PII</span>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-border opacity-50"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-border opacity-50"></div>
            </div>

            {/* Toxicity Slider */}
            <div className="card-light p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-heading">Toxicity</span>
                <span className="text-sm text-muted">Medium</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-goftus-aqua rounded-full border-2 border-white shadow-sm"></div>
                <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-goftus-aqua/20 to-goftus-aqua rounded-full"></div>
              </div>
            </div>

            {/* DLP Card */}
            <div className="card-light bg-foreground text-background p-6">
              <h3 className="font-bold text-lg mb-2">DLP</h3>
              <p className="text-sm opacity-90">Security & Data Governance</p>
            </div>

            {/* Text Input Only Dropdown */}
            <div className="card-light p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-body">Text input only</span>
                <ExternalLink className="w-4 h-4 text-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}