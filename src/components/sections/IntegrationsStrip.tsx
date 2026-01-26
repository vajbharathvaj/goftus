// IntegrationsStrip.tsx
const integrations = [
  { name: "SharePoint", logo: "📄" },
  { name: "PowerPoint", logo: "📊" },
  { name: "Outlook", logo: "📧" },
  { name: "Excel", logo: "📈" },
  { name: "Azure AD", logo: "🔐" },
  { name: "Jira", logo: "🎯" },
  { name: "Slack", logo: "💬" },
  { name: "Teams", logo: "👥" },
  { name: "Salesforce", logo: "☁️" },
  { name: "GitHub", logo: "🔧" },
  { name: "Notion", logo: "📝" },
  { name: "Figma", logo: "🎨" },
];

export function IntegrationsStrip() {
  return (
    <section className="relative py-16">
      {/* Subtle cyan aurora behind the strip */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[280px] w-[70vw] -translate-x-1/2 rounded-[48px]
                        bg-[radial-gradient(60%_120%_at_50%_0%,rgba(56,189,248,.16),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Seamless Integrations
          </h2>
        </div>

        {/* Glassy track */}
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10
                        shadow-[0_25px_70px_rgba(14,165,233,0.16)] p-5 md:p-6">
          {/* Edge fade mask */}
          <div
            className="overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {/* Infinite marquee (no interactions) */}
            <div className="flex items-center gap-5 md:gap-7 whitespace-nowrap will-change-transform motion-safe:animate-marquee">
              {[...integrations, ...integrations].map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  aria-label={item.name}
                  className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16
                             rounded-full bg-[#081126] border border-white/10
                             shadow-[0_8px_22px_rgba(0,0,0,.35)]
                             ring-1 ring-[#38BDF8]/12 grid place-items-center"
                >
                  <span className="text-2xl md:text-[26px] translate-y-[1px]">{item.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Small status dot */}
        <div className="mt-6 flex justify-center">
          <div className="h-2 w-2 rounded-full bg-[#38BDF8]/80 shadow-[0_0_12px_#38BDF8]" />
        </div>
      </div>
    </section>
  );
}
