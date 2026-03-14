export const WHATSAPP_NUMBER = "447700000000"; // Replace with actual WhatsApp number
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20a%20printing%20quote!`;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 60, damping: 18, delay: i * 0.08 },
  }),
};

export const services = [
  { icon: "BookOpen",   title: "Menu Printing",         desc: "Elegant, durable menus that reflect your brand." },
  { icon: "FileText",   title: "Flyers & Leaflets",     desc: "Eye-catching prints for promotions and events." },
  { icon: "CreditCard", title: "Business Cards",        desc: "Professional cards that leave a lasting impression." },
  { icon: "Tag",        title: "Stickers & Labels",     desc: "Custom stickers for packaging, branding, and more." },
  { icon: "Image",      title: "Posters",               desc: "Large-format prints for menu boards and marketing." },
  { icon: "Package",    title: "Restaurant Packaging",  desc: "Branded boxes, bags, and sleeves for your brand." },
];

export const reasons = [
  { num: "01", title: "Affordable Pricing", desc: "Competitive rates designed for small businesses and restaurants." },
  { num: "02", title: "Fast Turnaround", desc: "Quick production and delivery so you are never kept waiting." },
  { num: "03", title: "High Quality Printing", desc: "Vibrant colours, premium paper stocks, and sharp finishes." },
  { num: "04", title: "Built for Restaurants", desc: "We understand the needs of hospitality businesses inside out." },
];

export const steps = [
  { num: "1", title: "Message Us on WhatsApp", desc: "Tap the button and send us a quick hello to get started." },
  { num: "2", title: "Share Your Requirements", desc: "Tell us what you need — sizes, quantities, and any design files." },
  { num: "3", title: "Get a Quote & Order", desc: "Receive your instant quote, confirm, and we will handle the rest." },
];
