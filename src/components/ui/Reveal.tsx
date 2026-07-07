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
      className={`h-full [&>*]:h-full transition-opacity duration-[700ms] ease-out ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
