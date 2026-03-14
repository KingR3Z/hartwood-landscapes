"use client";

import { ctaData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function CTASection() {
  const sectionRef = useReveal(".reveal-item");

  return (
    <section ref={sectionRef} style={{ background: "#8A9A84" }} className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
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
              className="font-display mb-6 lg:mb-12"
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
            <form style={{ display: "flex", flexDirection: "column", gap: "28px" }} onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: First name / Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                <div>
                  <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>First name <span style={{ opacity: 0.6 }}>*</span></label>
                  <input type="text" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px" }} />
                </div>
                <div>
                  <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Last name <span style={{ opacity: 0.6 }}>*</span></label>
                  <input type="text" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px" }} />
                </div>
              </div>

              {/* Row 2: Phone / Postcode */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                <div>
                  <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Phone <span style={{ opacity: 0.6 }}>*</span></label>
                  <div className="flex" style={{ height: "56px" }}>
                    <div className="flex items-center gap-1.5 px-4 shrink-0" style={{ background: "rgba(255,255,255,0.88)", borderRight: "1px solid #ddd", borderRadius: "6px 0 0 6px", color: "#2C2C2C", fontSize: "14px" }}>
                      <span>🇬🇧</span>
                      <span style={{ fontSize: "10px", color: "#888" }}>&#9662;</span>
                    </div>
                    <input type="tel" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "0 6px 6px 0" }} />
                  </div>
                </div>
                <div>
                  <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Postcode <span style={{ opacity: 0.6 }}>*</span></label>
                  <input type="text" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px" }} />
                </div>
              </div>

              {/* Row 3: Email / Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                <div>
                  <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Email <span style={{ opacity: 0.6 }}>*</span></label>
                  <input type="email" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px" }} />
                </div>
                <div>
                  <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>What service are you looking for?</label>
                  <select className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30 appearance-none" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px", backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: "44px" }}>
                    <option value="">Select...</option>
                    <option value="design">Garden Design</option>
                    <option value="landscaping">Landscaping &amp; Build</option>
                    <option value="styling">Garden Styling</option>
                    <option value="planting">Planting Schemes</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  className="w-full text-sm tracking-wide transition-all duration-300 hover:opacity-90"
                  style={{ background: "#D9DDD6", color: "#000000", border: "none", cursor: "pointer", fontSize: "14px", borderRadius: "28px", fontFamily: "var(--font-body)", fontWeight: 400, height: "56px" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
