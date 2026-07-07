"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

type Props = {
  children: ReactNode;
  delay?: number;
  id?: string;
};

export function Reveal({ children, delay = 0, id }: Props) {
  const isClient = useIsClient();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const supportsObserver = isClient && "IntersectionObserver" in window;

  useEffect(() => {
    if (!supportsObserver) return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          obs.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [supportsObserver]);

  const shown = visible || (isClient && !supportsObserver);

  return (
    <div
      ref={ref}
      id={id}
      className={`h-full [&>*]:h-full transition-[opacity,transform] duration-[800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
