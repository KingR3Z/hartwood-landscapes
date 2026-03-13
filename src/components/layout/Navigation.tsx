"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNav } from "@/data/navigation";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Main Navigation — white bg, no logo, links spread wide */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white"
        style={{ borderBottom: "1px solid #e8e6e1" }}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: "0 clamp(24px, 4vw, 64px)", height: "70px" }}
        >
          {/* Desktop Nav — links spread evenly, no logo */}
          <nav className="hidden lg:flex items-center gap-0 flex-1">
            {mainNav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex-1 text-center text-sm transition-opacity hover:opacity-60"
                style={{
                  color: "var(--charcoal)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "15px",
                  letterSpacing: "0.3px",
                  textDecoration: "none",
                }}
              >
                {link.label}
                {link.children && <span className="ml-1 text-xs opacity-50">&#8964;</span>}
              </Link>
            ))}
          </nav>

          {/* Mobile: Brand name (visible only on mobile) */}
          <Link
            href="/"
            className="lg:hidden font-display text-lg tracking-wide"
            style={{ color: "var(--charcoal)" }}
          >
            Hartwood
          </Link>

          {/* CTA Button — always visible on desktop */}
          <Link
            href={mainNav.cta.href}
            className="hidden lg:inline-flex items-center gap-2 ml-4"
            style={{
              padding: "10px 28px",
              background: "var(--sage)",
              color: "var(--charcoal)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 400,
              borderRadius: "50px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            {mainNav.cta.label}
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
              style={{ background: "var(--charcoal)" }}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--charcoal)" }}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
              style={{ background: "var(--charcoal)" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "70px" }}
      >
        <div className="flex flex-col justify-center h-full px-8">
          <nav className="space-y-6">
            {mainNav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-display text-3xl hover:opacity-60 transition-opacity"
                style={{ color: "var(--charcoal)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12">
            <Link
              href={mainNav.cta.href}
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
            >
              {mainNav.cta.label} <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
