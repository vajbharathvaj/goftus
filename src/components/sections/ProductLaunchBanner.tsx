// src/components/marketing/ProductLaunchBanner.tsx
"use client";

import { useEffect, useState } from "react";
import { Rocket, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  product?: string;
  href?: string;
  message?: string;
};

export function ProductLaunchBanner({
  product = "Flagen AI",
  href = "/flagen",
  message = "Build your backend faster",
}: Props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("launch-banner-dismissed") === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("launch-banner-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-6 z-[60] mx-auto max-w-5xl px-4" aria-live="polite">
      {/* Outer neon ring (behind the card) */}
      <div className="relative">
        <div className="pointer-events-none absolute -inset-7 rounded-3xl bg-goftus-aqua/20 blur-2xl animate-[pulseGlow_4s_ease-in-out_infinite]" />

        {/* Gradient frame */}
        <div className="relative p-[1.6px] rounded-2xl bg-gradient-to-r from-goftus-aqua via-goftus-aqua/40 to-transparent">
          {/* Glass card */}
          <div className="relative rounded-2xl bg-[#0b1417]/85 backdrop-blur-xl border border-white/10 overflow-hidden shadow-[0_8px_50px_rgba(0,0,0,.45)]">
            {/* Ambient glow paint */}
            <div className="pointer-events-none absolute -inset-20 opacity-25 blur-3xl
                            bg-[radial-gradient(80%_60%_at_15%_10%,#15d0c1_0%,transparent_60%),radial-gradient(70%_60%_at_85%_90%,#0ea5a3_0%,transparent_55%)]" />

            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-5 py-4 md:px-7 md:py-5">
              {/* Left: icon + text */}
              <div className="flex items-start gap-3 md:gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full
                                 bg-goftus-aqua text-background shadow-md">
                  <Rocket className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-goftus-aqua/15 text-goftus-aqua px-2 py-0.5 text-[11px] font-semibold">
                      Product launch
                    </span>
                  </div>

                  {/* Product name: big + gradient */}
                  <h3
                    className="mt-1 text-lg md:text-xl font-extrabold leading-tight
                               bg-gradient-to-r from-goftus-aqua via-white to-goftus-aqua/80 bg-clip-text text-transparent"
                  >
                    {product} is live
                  </h3>

                  <p className="mt-1 text-[13px] md:text-sm text-foreground/80">
                    {message}. <span className="text-foreground/60">Try it now.</span>
                  </p>
                </div>
              </div>

              {/* Right: actions */}
              <div className="flex items-center gap-2 md:gap-3">
                <a
                  href={href}
                  className="group relative inline-flex h-10 items-center rounded-full
                             bg-goftus-aqua px-4 md:px-5 font-semibold text-background
                             shadow-[0_10px_30px_rgba(23,209,194,.35)]
                             focus:outline-none focus:ring-2 focus:ring-goftus-aqua/50"
                  aria-label={`Try ${product}`}
                >
                  {/* Shimmer */}
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute -left-[120%] top-0 h-full w-[120%] bg-gradient-to-r
                                     from-transparent via-white/35 to-transparent
                                     opacity-20 blur-[2px] animate-[shine_2.6s_linear_infinite]" />
                  </span>
                  Try {product} →
                </a>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDismiss}
                  aria-label="Dismiss product announcement"
                  className="h-9 w-9 rounded-lg hover:bg-foreground/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
