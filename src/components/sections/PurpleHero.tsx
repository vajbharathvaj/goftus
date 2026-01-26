import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GoftusCirclePanel from "@/components/sections/GoftusCirclePanel";

export function PurpleHero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative order-2 flex items-center justify-center lg:order-1">
            <div className="relative w-full max-w-[620px]">
              <GoftusCirclePanel />
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
              Future-ready AI systems
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Building Scalable
              <br />
              and Robust{" "}
              <span className="italic text-orange-400 drop-shadow-[0_0_18px_rgba(251,146,60,0.75)]">
                AI
              </span>
              <br />
              Solutions and Products
              <br />
              <span className="text-cyan-200">worldwide.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Easily build and deploy secure, intelligent workflows across your
              organization. Smart AI to accelerate AI initiatives across the organization
              with confidence.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="hero"
                size="lg"
                className="rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(14,165,233,0.45)] hover:bg-cyan-300"
              >
                <Link to="/contact">Get a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
