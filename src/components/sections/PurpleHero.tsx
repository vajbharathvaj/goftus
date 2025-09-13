import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import GoftusCirclePanel from "@/components/sections/GoftusCirclePanel";

export function PurpleHero() {
  return (
    <section className="relative py-28 md:py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* 12-col grid so we can do a 7/5 split on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          
          {/* Left Column — text */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Building Scalable
              <br />
              and Robust AI
              <br />
              Solutions and Products
              <br />
              <span className="text-goftus-aqua">worldwide.</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-xl">
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

          {/* Right Column — circle panel */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <GoftusCirclePanel />
          </div>

        </div>
      </div>
    </section>
  );
}
