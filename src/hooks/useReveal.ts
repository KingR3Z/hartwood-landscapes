"use client";

import { useEffect, useRef } from "react";

/**
 * Simple scroll-triggered reveal using IntersectionObserver.
 * Adds the 'revealed' class to child elements matching `selector` when the section enters the viewport.
 * CSS handles the transition (see globals.css .reveal-item and .revealed).
 */
export function useReveal(selector: string, threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = el.querySelectorAll(selector);
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add("revealed");
              }, i * 120); // stagger
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [selector, threshold]);

  return ref;
}
