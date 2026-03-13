"use client";

import { ctaData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function CTASection() {
  const sectionRef = useReveal(".reveal-item");

  return (
    <section ref={sectionRef} style={{ background: "#8A9A84" }} className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Text */}
          <div>
            <h2
              className="reveal-item font-display mb-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--white)",
                lineHeight: 1.3,
              }}
            >
              {ctaData.heading}
            </h2>
            <p
              className="reveal-item mb-6 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}
            >
              {ctaData.text}
            </p>
            <p
              className="reveal-item mb-4 leading-relaxed"
              style={{ color: "var(--white)", fontSize: "15px", fontWeight: 500 }}
            >
              What happens next
            </p>
            <p
              className="reveal-item leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}
            >
              {ctaData.subtext}
            </p>
          </div>

          {/* Right: Form */}
          <div className="reveal-item">
            <p
              className="font-display mb-8"
              style={{
                fontSize: "clamp(20px, 2vw, 26px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--white)",
                lineHeight: 1.4,
              }}
            >
              Arrange an initial garden design consultation and tell us about your project.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>First name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Last name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Phone *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Postcode *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Email *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>What service are you looking for?</label>
                  <select className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none appearance-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }}>
                    <option value="">Select...</option>
                    <option value="design">Garden Design</option>
                    <option value="landscaping">Landscaping &amp; Build</option>
                    <option value="styling">Garden Styling</option>
                    <option value="planting">Planting Schemes</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-4 text-sm font-medium tracking-wide rounded-sm transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.9)", color: "var(--charcoal)", border: "none", cursor: "pointer", fontSize: "14px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
