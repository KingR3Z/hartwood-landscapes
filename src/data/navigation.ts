import { client, emailLink } from "@/config/client";

type NavLink = { label: string; href: string; children?: { label: string; href: string }[] };

export const mainNav = {
  logo: client.shortName,
  cta: { label: "Get a Free Quote", href: "/contact" },
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/garden-design" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "News", href: "/news" },
  ] as NavLink[],
};

export const footerData = {
  logo: client.logoInitials,
  tagline: client.name.toUpperCase(),
  subtitle: client.tagline,
  contact: {
    heading: "GET IN TOUCH",
    address: client.address,
    phone: client.phone,
    email: client.email,
  },
  menu: {
    heading: "MENU",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
  },
  socials: {
    heading: "FOLLOW US",
    links: client.socials,
  },
  copyright: `2026 ${client.name}`,
};
