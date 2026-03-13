"use client";

import Image from "next/image";
import { whyChooseData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function WhyChoose() {
  const sectionRef = useReveal(".reveal-item", 0.1);

  return (
    <section ref={sectionRef} className="relative" style={{ minHeight: "700px" }}>
      {/* Full-width background image */}
      <Image
        src={whyChooseData.image}
        alt="Why choose Hartwood Landscapes"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Centered cream card overlay */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{ minHeight: "700px", padding: "clamp(40px, 6vw, 80px)" }}
      >
        <div
          className="reveal-item"
          style={{
            background: "rgba(249, 247, 244, 0.93)",
            maxWidth: "680px",
            width: "100%",
            padding: "clamp(40px, 5vw, 70px)",
          }}
        >
          <h2
            className="font-display mb-8"
            style={{
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              lineHeight: 1.3,
            }}
          >
            {whyChooseData.title}
          </h2>
          {whyChooseData.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-5 leading-relaxed"
              style={{ color: "var(--warm-grey)", fontSize: "15px" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
