import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, ExternalLink } from "lucide-react";
import { NeuralMesh } from "@/components/background/NeuralMesh";

const trustPills = [
  { icon: Shield, text: "Secure" },
  { icon: Target, text: "Controlled" },
  { icon: Zap, text: "Efficient" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Interactive Neural Mesh Background */}
      <NeuralMesh className="absolute inset-0 z-0" />
      
      {/* Readability Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/20 via-background/40 to-background/60"></div>

      {/* Floating Trust Pills */}
      {trustPills.map((pill, index) => {
        const IconComponent = pill.icon;
        return (
          <div
            key={pill.text}
            className={`absolute z-20 animate-float ${
              index === 0 ? "top-1/4 left-1/4" : 
              index === 1 ? "top-1/3 right-1/4" : 
              "top-2/3 left-1/3"
            }`}
            style={{ 
              animationDelay: `${index * 2}s`,
              animationDuration: `${6 + index}s`
            }}
          >
            <div className="relative">
              {/* Orange status dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-goftus-orange rounded-full animate-pulse-glow z-10"></div>
              <Button variant="pill" size="pill" className="pointer-events-none border-goftus-aqua/30 bg-surface/80 backdrop-blur-sm">
                <IconComponent className="w-3 h-3 mr-2 text-goftus-aqua" />
                <span className="text-foreground">{pill.text}</span>
              </Button>
            </div>
          </div>
        );
      })}

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Main Headline */}
          <h1 className="heading-xl">
            <span className="block text-foreground">Transparent & reliable</span>
            <span className="block gradient-aqua">AI solutions for modern products</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Build, ship, and scale AI—without the boilerplate.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-magnetic animate-pulse-glow relative overflow-hidden"
            >
              Get a quote
            </Button>
            <Button 
              variant="hero-ghost" 
              size="xl" 
              className="animate-magnetic group border-surface-elevated/50 hover:border-goftus-orange/20 hover:underglow-orange"
            >
              <span className="mr-2">Visit resources</span>
              <ExternalLink className="w-4 h-4 text-goftus-orange group-hover:text-goftus-orange-hover transition-colors" />
            </Button>
          </div>

          {/* Microcopy */}
          <div className="pt-4">
            <div className="flex items-center justify-center space-x-2 text-sm text-foreground-muted">
              <span className="w-1 h-1 bg-goftus-orange rounded-full"></span>
              <span>No credit card</span>
              <span className="w-1 h-1 bg-goftus-orange rounded-full"></span>
              <span>5-minute setup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
}