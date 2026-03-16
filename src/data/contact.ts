import { client, phoneLink, emailLink } from "@/config/client";

export const contactHeroData = {
  overline: "GET IN TOUCH",
  heading:
    `Contact ${client.name} for a free, no-obligation quote.`,
  text: "Whether you need a new driveway, patio, garden landscaping, or just want some honest advice, we're here to help. Get in touch and we'll arrange a convenient time to visit your property.",
  image: "/images/garden-consultation-v2.jpg",
};

export const contactMethods = [
  {
    icon: "email",
    label: "Email Us",
    value: client.email,
    href: emailLink,
  },
  {
    icon: "phone",
    label: "Call Us",
    value: client.phone,
    href: phoneLink,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: client.whatsapp.display,
    href: client.whatsapp.link,
  },
];

export const locationData = {
  address: [
    client.name,
    ...client.address,
  ],
  image: "/images/office.jpg",
};

export const hoursData = {
  hours: client.hours,
};

export const socialLinks = client.socials;

export const exploreServices = [
  {
    title: "Driveways & Block Paving",
    image: "/images/service-patios-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Patios & Paving",
    image: "/images/landscaping-main-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Garden Landscaping",
    image: "/images/service-lawns-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Fencing & Boundaries",
    image: "/images/service-fencing-v2.jpg",
    href: "/garden-design",
  },
];
