"use client";

import Link from "next/link";
import { footerData } from "@/data/navigation";

export default function Footer() {
  return (
    <footer style={{ background: "var(--sage)" }}>
      <div className="container-custom section-padding">
        {/* Monogram + Tagline */}
        <div className="mb-8">
          <h2
            className="font-display"
            style={{ fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "0.15em" }}
          >
            {footerData.logo}
          </h2>
          <p
            className="mt-2"
            style={{ fontSize: "12px", fontWeight: 500, color: "var(--charcoal)", letterSpacing: "0.25em", textTransform: "uppercase" }}
          >
            {footerData.tagline}
          </p>
          <p
            className="mt-1"
            style={{ fontSize: "10px", fontWeight: 400, color: "var(--forest)", letterSpacing: "0.15em" }}
          >
            {footerData.subtitle}
          </p>
        </div>

        {/* Thin separator line */}
        <hr style={{ border: "none", borderTop: "1px solid rgba(44, 44, 44, 0.2)", margin: "0 0 40px 0" }} />

        {/* Footer Grid — 4 columns matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact */}
          <div>
            <h3
              className="text-xs font-semibold mb-6"
              style={{ color: "var(--charcoal)", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              {footerData.contact.heading}
            </h3>
            <div className="space-y-1">
              {footerData.contact.address.map((line, i) => (
                <p key={i} className="text-sm" style={{ color: "var(--charcoal)", opacity: 0.8 }}>
                  {line}
                </p>
              ))}
            </div>
            <p className="text-sm mt-4" style={{ color: "var(--charcoal)", opacity: 0.8, textDecoration: "underline" }}>
              {footerData.contact.phone}
            </p>
            <p className="text-sm" style={{ color: "var(--charcoal)", opacity: 0.8, textDecoration: "underline" }}>
              {footerData.contact.email}
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3
              className="text-xs font-semibold mb-6"
              style={{ color: "var(--charcoal)", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              {footerData.menu.heading}
            </h3>
            <nav className="space-y-2">
              {footerData.menu.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm hover:opacity-60 transition-opacity"
                  style={{ color: "var(--charcoal)", opacity: 0.8, textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 space-y-2">
              {footerData.menu.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs hover:opacity-60 transition-opacity"
                  style={{ color: "var(--charcoal)", opacity: 0.6, textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3
              className="text-xs font-semibold mb-6"
              style={{ color: "var(--charcoal)", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              {footerData.socials.heading}
            </h3>
            <nav className="space-y-2">
              {footerData.socials.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm hover:opacity-60 transition-opacity"
                  style={{ color: "var(--charcoal)", opacity: 0.8, textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Awards / Badges placeholder */}
          <div>
            <div className="flex gap-4">
              <div
                className="flex items-center justify-center"
                style={{
                  width: "130px",
                  height: "130px",
                  background: "rgba(44, 44, 44, 0.85)",
                  borderRadius: "4px",
                  padding: "12px",
                }}
              >
                <div className="text-center">
                  <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    DESIGN
                  </p>
                  <p className="font-display" style={{ color: "var(--white)", fontSize: "16px", fontStyle: "italic", lineHeight: 1.2, margin: "4px 0" }}>
                    Best of Houzz
                  </p>
                  <p style={{ color: "var(--white)", fontSize: "10px", letterSpacing: "0.05em" }}>
                    Winner
                  </p>
                  <p className="font-display" style={{ color: "var(--gold)", fontSize: "22px", fontWeight: 400, marginTop: "4px" }}>
                    2026
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-center"
                style={{
                  width: "130px",
                  height: "130px",
                  background: "rgba(44, 44, 44, 0.85)",
                  borderRadius: "4px",
                  padding: "12px",
                }}
              >
                <div className="text-center">
                  <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    SERVICE
                  </p>
                  <p className="font-display" style={{ color: "var(--white)", fontSize: "16px", fontStyle: "italic", lineHeight: 1.2, margin: "4px 0" }}>
                    Best of Houzz
                  </p>
                  <p style={{ color: "var(--white)", fontSize: "10px", letterSpacing: "0.05em" }}>
                    Winner
                  </p>
                  <p className="font-display" style={{ color: "var(--gold)", fontSize: "22px", fontWeight: 400, marginTop: "4px" }}>
                    2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6" style={{ borderTop: "1px solid rgba(44, 44, 44, 0.15)" }}>
          <p className="text-xs" style={{ color: "var(--charcoal)", opacity: 0.5 }}>
            &copy; {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
