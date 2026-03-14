"use client";

import Image from "next/image";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import { useReveal } from "@/hooks/useReveal";

const portfolioImages = [
  { src: "/images/projects/project-01.jpg", alt: "Contemporary courtyard garden with natural stone paving" },
  { src: "/images/projects/project-02.jpg", alt: "Luxury rear garden with layered planting and seating area" },
  { src: "/images/projects/project-03.jpg", alt: "Modern landscaped garden with water feature" },
  { src: "/images/projects/project-04.jpg", alt: "Country estate garden with structured hedging" },
  { src: "/images/projects/project-05.jpg", alt: "Lush planting scheme with mixed perennials" },
  { src: "/images/projects/project-06.jpg", alt: "Urban garden transformation with decking and lighting" },
  { src: "/images/projects/project-07.jpg", alt: "Mediterranean-inspired terrace garden" },
  { src: "/images/projects/project-08.jpg", alt: "Formal garden with clipped topiary and gravel paths" },
];

export default function PortfolioPage() {
  const galleryRef = useReveal(".reveal-item");
  const ctaRef = useReveal(".reveal-item");

  return (
    <InnerPageLayout>
      <PageHero
        title="Portfolio"
        overline="OUR WORK"
        image="/images/projects/project-06.jpg"
        centered
        ctaLabel="Start Your Garden Project"
        ctaHref="/contact"
      />

      {/* Gallery Grid */}
      <section ref={galleryRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="reveal-item font-display mb-4"
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--charcoal)",
                lineHeight: 1.3,
              }}
            >
              Gardens We Have Brought to Life
            </h2>
            <p
              className="reveal-item max-w-2xl mx-auto"
              style={{ color: "var(--warm-grey)", fontSize: "15px", lineHeight: 1.8 }}
            >
              A selection of completed projects from our clients, showcasing the quality and care that goes into every Hartwood garden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioImages.map((img, i) => (
              <div
                key={i}
                className="reveal-item group relative overflow-hidden"
                style={{ borderRadius: "8px" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden img-hover-zoom">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(transparent 50%, rgba(0,0,0,0.45))" }}
                  >
                    <p className="text-white text-sm leading-snug">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} style={{ background: "var(--cream)" }} className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="reveal-item font-display mb-6"
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--charcoal)",
                lineHeight: 1.3,
              }}
            >
              Ready to Create Your Dream Garden?
            </h2>
            <p
              className="reveal-item leading-relaxed mb-8"
              style={{ color: "var(--warm-grey)", fontSize: "15px" }}
            >
              Every project in our portfolio began with a conversation. Get in touch to discuss your vision and let us bring it to life.
            </p>
            <a
              href="/contact"
              className="reveal-item inline-block font-medium tracking-wide transition-all duration-300"
              style={{
                background: "var(--sage)",
                color: "#FFFFFF",
                padding: "14px 36px",
                borderRadius: "50px",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
