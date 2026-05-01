"use client";

import { useState, useEffect, useRef } from "react";

type Props = {
  target: number;
  prefix?: string;
  suffix?: string;
};

export function StatNumber({ target, prefix, suffix }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(raf);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const duration = 1400;
          const start = performance.now();
          function tick(now: number) {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span className="stat-num" ref={ref}>
      {prefix && <span className="stat-unit">{prefix}</span>}
      {value}
      {suffix && <span className="stat-unit"> {suffix}</span>}
    </span>
  );
}
