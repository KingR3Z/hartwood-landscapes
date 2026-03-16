import { client } from "@/config/client";

export const aboutHeaderData = {
  overline: `ABOUT ${client.name.toUpperCase()}`,
  heading: "Professional Paving, Patios & Landscaping",
  paragraphs: [
    `${client.name} is a trusted paving and landscaping company based in ${client.region}. We specialise in creating beautiful driveways, patios, and outdoor living spaces for homeowners across ${client.basedIn} and the surrounding areas.`,
    "With years of hands-on experience, our team delivers quality craftsmanship on every project — from block paving driveways to complete garden transformations.",
  ],
  image: "/images/about-landscape-v2.jpg",
};

export const coreValues = [
  {
    title: "Safe & Secure",
    description:
      "Every project is fully insured and managed to the highest standards. We provide transparent contracts, detailed timelines, and regular progress updates throughout your garden transformation.",
    icon: "shield",
  },
  {
    title: "Expert Advice",
    description:
      "Our qualified landscape architects and designers bring years of specialist knowledge to every consultation. We guide you through design options, materials, and planting to ensure the perfect result.",
    icon: "lightbulb",
  },
  {
    title: "Our Promise",
    description:
      "We are committed to delivering exceptional quality on every project. From concept to completion, we maintain the highest standards of design, craftsmanship, and client care.",
    icon: "heart",
  },
];

export const directorData = {
  name: client.founderName,
  role: client.founderRole,
  image: "/images/director-portrait-v2.jpg",
  bio: [
    `${client.founderName} founded ${client.name} in ${client.yearFounded} with a straightforward mission: to deliver high-quality paving, patios, and landscaping at fair prices for homeowners across ${client.basedIn}.`,
    `With years of hands-on experience in the trade, ${client.founderName} takes a practical, no-nonsense approach to every project. From herringbone block paving driveways to full garden transformations, he ensures every job is completed to the highest standard.`,
    `${client.founderName} is passionate about delivering results that homeowners can be proud of. Every project starts with a proper site visit, a clear quote, and an honest conversation about what will work best for the space and the budget.`,
    `Under ${client.founderName}'s leadership, ${client.name} has built a strong reputation in ${client.region}, with a 4.9-star rating on Google from over 50 five-star reviews.`,
    `When he's not on site, ${client.founderName} can be found spending time with his family or working on his own garden projects at home in ${client.basedIn}.`,
  ],
  cta: { label: `Contact ${client.founderName}`, href: "/contact" },
};

export const missionData = {
  heading: "Our Mission",
  paragraphs: [
    `At ${client.name}, our mission is to deliver professional paving, patios, and landscaping that homeowners can be proud of. We believe every home deserves a quality outdoor space — and we make that happen at a fair price.`,
    "We approach every project with the same attention to detail, whether it's a new block paving driveway or a full garden transformation. Our team takes pride in clean workmanship, honest pricing, and completing jobs on time.",
    `As a local ${client.basedIn} business, we're committed to building lasting relationships with our customers. We treat every property as if it were our own, and we don't cut corners.`,
  ],
  image: "/images/mission-bg-v2.jpg",
};

export const partnersData = {
  heading: "Our Trusted Partners",
  partners: client.partners,
};

export const awardsData = {
  heading: "Recognised for Quality & Service",
  awards: client.awards,
};
