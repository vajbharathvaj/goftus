"use client";

import React from "react";

const GoftusCirclePanel: React.FC = () => {
  return (
    <div className="relative aspect-square w-full max-w-[640px]">
      {/* Ambient glow (AQUA ONLY – no orange tint) */}
      <div
        className="pointer-events-none absolute -inset-[10%] rounded-[48px] opacity-90
                   bg-[radial-gradient(110%_80%_at_65%_35%,rgba(23,209,194,.16),transparent_60%)]"
      />

      {/* Deep disk */}
      <div className="absolute inset-0 rounded-full bg-[#09161B]
                      shadow-[inset_0_0_0_2px_rgba(23,209,194,.18),0_40px_100px_rgba(0,0,0,.55)]" />

      {/* Aqua rim */}
      <div className="absolute inset-[12px] rounded-full border-2 border-[#17D1C2]/60
                      shadow-[0_0_60px_#17D1C24d,0_0_4px_#17D1C2]" />

      {/* Concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-[112%] h-[112%] rounded-full border-2 border-dashed border-[#17D1C2]/40 animate-spin"
             style={{ animationDuration: "18s" }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-[132%] h-[132%] rounded-full border border-[#17D1C2]/20 animate-spin"
             style={{ animationDuration: "22s", animationDirection: "reverse" }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-[150%] h-[150%] rounded-full border border-[#17D1C2]/14 animate-spin"
             style={{ animationDuration: "28s" }} />
      </div>

      {/* Orbiting dots (keep a touch of orange for brand accent) */}
      <div className="absolute inset-0 animate-spin z-20" style={{ animationDuration: "12s" }}>
        <span
          className="absolute left-1/2 top-1/2 h-[10px] w-[10px] rounded-full bg-[#17D1C2]
                     shadow-[0_0_12px_#17D1C2]"
          style={{ transform: "translate(-50%,-50%) translateX(145px)" }}
        />
      </div>

      <div className="absolute inset-0 animate-spin z-20" style={{ animationDuration: "16s", animationDirection: "reverse" }}>
        <span
          className="absolute left-1/2 top-1/2 h-[10px] w-[10px] rounded-full bg-[#E0582C]
                     shadow-[0_0_12px_#E0582C]"
          style={{ transform: "translate(-50%,-50%) translateX(115px)" }}
        />
      </div>

      <div className="absolute inset-0 animate-spin z-20" style={{ animationDuration: "20s" }}>
        <span
          className="absolute left-1/2 top-1/2 h-[10px] w-[10px] rounded-full bg-[#17D1C2]
                     shadow-[0_0_12px_#17D1C2]"
          style={{ transform: "translate(-50%,-50%) translateX(175px)" }}
        />
      </div>

      {/* Center GOFTUS logo (floating) */}
      <div className="absolute inset-0 flex items-center justify-center p-8 z-30">
        {/* Use your actual path; this is the one you’ve been using */}
        <img
          src="/lovable-uploads/goftus-logo.png"
          alt="GOFTUS"
          className="relative z-[60] w-[72%] max-w-[420px] h-auto object-contain
               drop-shadow-[0_0_32px_rgba(23,209,194,.55)] animate-float"
        />
      </div>

      {/* Glass chips */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 p-3 sm:p-4 rounded-lg
                      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-30
                      hover:shadow-xl hover:border-[#17D1C2]/60 transition-all duration-300">
        <p className="text-[10px] sm:text-xs font-medium text-[#17D1C2]">Advanced Algorithms</p>
        <p className="text-xs sm:text-sm font-semibold text-white">Neural Networks</p>
      </div>

      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 p-3 sm:p-4 rounded-lg
                      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-30
                      hover:shadow-xl hover:border-[#17D1C2]/60 transition-all duration-300">
        <p className="text-[10px] sm:text-xs font-medium text-[#17D1C2]">Language Processing</p>
        <p className="text-xs sm:text-sm font-semibold text-white">RAG & Embeddings</p>
      </div>

      <div className="absolute left-2 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-lg
                      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-30
                      hover:shadow-xl hover:border-[#17D1C2]/60 transition-all duration-300">
        <p className="text-[10px] sm:text-xs font-medium text-[#17D1C2]">Operations</p>
        <p className="text-xs sm:text-sm font-semibold text-white">MLOps & Observability</p>
      </div>
    </div>
  );
};

export default GoftusCirclePanel;
