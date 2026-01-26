import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const orbitRings = [
  {
    ratio: 0.34,
    duration: 26,
    reverse: false,
    items: [
      { src: "/images/rings/artificial-intelligence.png", alt: "AI icon", size: "h-12 w-12" },
      { src: "/images/rings/chat-gpt.png", alt: "Chat icon", size: "h-11 w-11" },
      { src: "/images/rings/wearable-technology.png", alt: "Wearable icon", size: "h-12 w-12" },
      { src: "/images/rings/chat-gpt.png", alt: "Chat icon", size: "h-11 w-11" },
    ],
  },
  {
    ratio: 0.48,
    duration: 38,
    reverse: true,
    items: [
      { src: "/images/rings/artificial-intelligence%20(1).png", alt: "AI icon", size: "h-12 w-12" },
      { src: "/images/rings/deep-learning.png", alt: "Deep learning icon", size: "h-11 w-11" },
      { src: "/images/rings/settings.png", alt: "Settings icon", size: "h-12 w-12" },
      { src: "/images/rings/deep-learning.png", alt: "Deep learning icon", size: "h-11 w-11" },
    ],
  },
];

const GoftusCirclePanel: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState(420);
  const iconFilter =
    "brightness(0) saturate(100%) invert(78%) sepia(20%) saturate(3372%) hue-rotate(162deg) brightness(101%) contrast(101%)";

  useEffect(() => {
    const element = containerRef.current;
    if (!element || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width) {
          setContainerSize(entry.contentRect.width);
        }
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const rings = useMemo(
    () =>
      orbitRings.map((ring) => ({
        ...ring,
        radius: Math.round(containerSize * ring.ratio),
      })),
    [containerSize]
  );

  return (
    <div className="relative flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative h-[420px] w-[420px] sm:h-[480px] sm:w-[480px] lg:h-[520px] lg:w-[520px]"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(56,189,248,0.35),_rgba(14,116,144,0.15),_transparent_70%)] blur-2xl" />
          <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.25),_transparent_65%)]" />
          <img
            src="/images/image_1.png"
            alt="GOFTUS"
            className="relative w-[220px] max-w-full object-contain"
          />
        </div>
        {rings.map((ring, ringIndex) => {
          const animate = reduceMotion ? {} : { rotate: ring.reverse ? -360 : 360 };
          const transition = reduceMotion
            ? undefined
            : { duration: ring.duration, repeat: Infinity, ease: "linear" };

          return (
            <div
              key={`ring-${ringIndex}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                className="relative rounded-full border border-white/10"
                animate={animate}
                transition={transition}
                style={{
                  width: ring.radius * 2,
                  height: ring.radius * 2,
                }}
              >
                {ring.items.map((item, index) => {
                  const angle = (360 / ring.items.length) * index;
                  const radians = (angle * Math.PI) / 180;
                  const x = Math.cos(radians) * ring.radius;
                  const y = Math.sin(radians) * ring.radius;
                  return (
                    <div
                      key={`${item.src}-${index}`}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <motion.div
                        className="p-0"
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -6,
                                filter: "drop-shadow(0 0 24px rgba(56,189,248,0.55))",
                              }
                        }
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className={`${item.size} object-contain drop-shadow-[0_0_16px_rgba(56,189,248,0.65)]`}
                          style={{ filter: iconFilter }}
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default GoftusCirclePanel;
