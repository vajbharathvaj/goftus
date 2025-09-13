const logos = [
  { name: "OpenAI", width: "120" },
  { name: "Anthropic", width: "140" },
  { name: "Google Cloud", width: "130" },
  { name: "AWS", width: "80" },
  { name: "Microsoft", width: "120" },
  { name: "Meta", width: "100" },
];

export function TrustLogos() {
  return (
    <section className="py-16 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-foreground-muted uppercase tracking-wide mb-8">
          Trusted by teams building the future
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: `${logo.width}px` }}
            >
              {/* Placeholder for actual logos */}
              <div className="h-8 bg-foreground-muted rounded w-full flex items-center justify-center">
                <span className="text-xs font-medium text-background">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}