export const WHATSAPP_NUMBER = "447700000000";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20a%20printing%20quote!`;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 60, damping: 18, delay: i * 0.08 },
  }),
};

// ─── Homepage services (short form) ──────────────────────────────────────────
export const services = [
  { icon: "BookOpen",   title: "Menu Printing",         desc: "Elegant, durable menus that reflect your brand.", slug: "menus" },
  { icon: "FileText",   title: "Flyers & Leaflets",     desc: "Eye-catching prints for promotions and events.", slug: "flyers" },
  { icon: "CreditCard", title: "Business Cards",        desc: "Professional cards that leave a lasting impression.", slug: "business-cards" },
  { icon: "Tag",        title: "Stickers & Labels",     desc: "Custom stickers for packaging, branding, and more.", slug: "stickers" },
  { icon: "Image",      title: "Posters",               desc: "Large-format prints for menu boards and marketing.", slug: "posters" },
  { icon: "Package",    title: "Packaging",             desc: "Branded boxes, bags, and sleeves for your brand.", slug: "packaging" },
  { icon: "BookMarked", title: "Brochures",             desc: "Multi-page prints that tell your full story.", slug: "brochures" },
  { icon: "Megaphone",  title: "Banners",               desc: "Bold, weather-resistant outdoor and indoor banners.", slug: "banners" },
  { icon: "PenLine",    title: "Stationery",            desc: "Letterheads, notepads, and branded stationery.", slug: "stationery" },
  { icon: "Gift",       title: "Promotional Materials", desc: "Branded merchandise and promotional print items.", slug: "promotional" },
];

// ─── Full service detail data ─────────────────────────────────────────────────
export const SERVICE_DETAILS: Record<string, {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  desc: string;
  materials: string[];
  sizes: { name: string; dimensions: string }[];
  finishes: string[];
  useCases: string[];
  industries: string[];
}> = {
  "menus": {
    slug: "menus",
    icon: "BookOpen",
    title: "Menu Printing",
    tagline: "Every dish deserves a beautiful stage.",
    desc: "Premium menu printing that captures your brand identity and enhances the dining experience. From single-sheet inserts to multi-page bound menus.",
    materials: ["350gsm Silk", "400gsm Gloss", "Uncoated Kraft", "Laminated Board", "Recycled Stock"],
    sizes: [
      { name: "A4", dimensions: "210 × 297 mm" },
      { name: "A5", dimensions: "148 × 210 mm" },
      { name: "DL", dimensions: "99 × 210 mm" },
      { name: "A3", dimensions: "297 × 420 mm" },
      { name: "Custom", dimensions: "Any size" },
    ],
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft Touch", "Spot UV", "Wipe-clean Coating"],
    useCases: ["Restaurant menus", "Cocktail & wine lists", "Daily specials", "Kids menus", "QR code menus"],
    industries: ["Restaurants", "Bars & Pubs", "Hotels", "Cafés", "Fine Dining"],
  },
  "flyers": {
    slug: "flyers",
    icon: "FileText",
    title: "Flyers & Leaflets",
    tagline: "Make the first impression count.",
    desc: "High-impact flyers and leaflets designed to grab attention, communicate quickly, and drive action — perfect for promotions, events, and campaigns.",
    materials: ["130gsm Gloss", "170gsm Silk", "120gsm Uncoated", "Recycled 100gsm"],
    sizes: [
      { name: "A4", dimensions: "210 × 297 mm" },
      { name: "A5", dimensions: "148 × 210 mm" },
      { name: "A6", dimensions: "105 × 148 mm" },
      { name: "DL", dimensions: "99 × 210 mm" },
      { name: "Square", dimensions: "148 × 148 mm" },
    ],
    finishes: ["Gloss", "Matte", "Uncoated", "Folded (Bi-fold / Tri-fold)"],
    useCases: ["Event promotions", "Restaurant takeaway menus", "Offers & discounts", "Seasonal campaigns", "New opening announcements"],
    industries: ["Restaurants", "Retail", "Events", "Hospitality", "Healthcare", "Education"],
  },
  "business-cards": {
    slug: "business-cards",
    icon: "CreditCard",
    title: "Business Cards",
    tagline: "Small card. Big impression.",
    desc: "Premium business cards that communicate professionalism and trust. The first physical touchpoint between you and your customer — make it unforgettable.",
    materials: ["350gsm Silk", "400gsm Gloss", "Cotton Stock", "Uncoated 350gsm", "Kraft"],
    sizes: [
      { name: "Standard UK", dimensions: "85 × 55 mm" },
      { name: "Square", dimensions: "65 × 65 mm" },
      { name: "Slim", dimensions: "85 × 42 mm" },
      { name: "Custom", dimensions: "Any size" },
    ],
    finishes: ["Gloss Lamination", "Matte Lamination", "Soft Touch", "Spot UV", "Foil Stamping", "Embossing", "Round Corners"],
    useCases: ["Networking events", "In-restaurant branding", "Corporate gifting", "Staff identity cards", "Event passes"],
    industries: ["Corporate", "Restaurants", "Retail", "Health & Wellness", "Events", "Creative Agencies"],
  },
  "stickers": {
    slug: "stickers",
    icon: "Tag",
    title: "Stickers & Labels",
    tagline: "Stick your brand everywhere.",
    desc: "Custom die-cut stickers and labels for packaging, branding, and promotions. Durable, vibrant, and fully customisable to any shape.",
    materials: ["White Gloss Vinyl", "White Matte Vinyl", "Transparent Film", "Kraft Paper", "Removable Adhesive"],
    sizes: [
      { name: "Circle 50mm", dimensions: "50 × 50 mm" },
      { name: "Circle 75mm", dimensions: "75 × 75 mm" },
      { name: "Rectangle", dimensions: "Any size" },
      { name: "Die-cut", dimensions: "Custom shape" },
    ],
    finishes: ["Gloss", "Matte", "Holographic", "Waterproof Coating"],
    useCases: ["Product labels", "Packaging seals", "Bottle labels", "Branding stickers", "Event giveaways"],
    industries: ["Food & Beverage", "Retail", "Events", "Health & Wellness", "E-commerce"],
  },
  "posters": {
    slug: "posters",
    icon: "Image",
    title: "Posters",
    tagline: "Demand attention from across the room.",
    desc: "Large-format posters that command attention. From window displays to menu boards, printed on premium stock with vivid, fade-resistant inks.",
    materials: ["170gsm Silk", "200gsm Gloss", "135gsm Uncoated", "Canvas", "Foam Board"],
    sizes: [
      { name: "A3", dimensions: "297 × 420 mm" },
      { name: "A2", dimensions: "420 × 594 mm" },
      { name: "A1", dimensions: "594 × 841 mm" },
      { name: "A0", dimensions: "841 × 1189 mm" },
      { name: "Custom", dimensions: "Any size" },
    ],
    finishes: ["Gloss", "Matte", "Satin", "Weatherproof Lamination"],
    useCases: ["Window displays", "Menu boards", "Event signage", "Wall art", "Promotional displays"],
    industries: ["Restaurants", "Retail", "Events", "Hospitality", "Education"],
  },
  "packaging": {
    slug: "packaging",
    icon: "Package",
    title: "Packaging",
    tagline: "Unboxing is part of the experience.",
    desc: "Branded packaging that turns every order into a brand moment. Custom boxes, bags, and sleeves that make your product unforgettable.",
    materials: ["300gsm Kraft", "350gsm White Board", "Corrugated Card", "Recycled Stock", "Gloss Board"],
    sizes: [
      { name: "Small Box", dimensions: "100 × 100 × 50 mm" },
      { name: "Medium Box", dimensions: "200 × 150 × 100 mm" },
      { name: "Carrier Bag", dimensions: "Custom" },
      { name: "Sleeve Wrap", dimensions: "Custom" },
    ],
    finishes: ["Gloss Lamination", "Matte Lamination", "Spot UV", "Foil Stamping", "Embossing"],
    useCases: ["Takeaway boxes", "Gift packaging", "Retail bags", "Food packaging", "Product boxes"],
    industries: ["Restaurants", "Retail", "E-commerce", "Food & Beverage", "Luxury Brands"],
  },
  "brochures": {
    slug: "brochures",
    icon: "BookMarked",
    title: "Brochures",
    tagline: "Tell your story, beautifully bound.",
    desc: "Multi-page brochures that communicate depth, detail, and credibility. Perfect for showcasing services, products, and brand stories.",
    materials: ["170gsm Silk", "200gsm Gloss", "130gsm Uncoated", "Recycled Stock"],
    sizes: [
      { name: "A4", dimensions: "210 × 297 mm" },
      { name: "A5", dimensions: "148 × 210 mm" },
      { name: "DL", dimensions: "99 × 210 mm" },
      { name: "Square", dimensions: "210 × 210 mm" },
    ],
    finishes: ["Saddle Stitched", "Perfect Bound", "Bi-fold", "Tri-fold", "Z-fold", "Gloss / Matte Cover"],
    useCases: ["Product catalogues", "Company profiles", "Event programmes", "Hotel room guides", "Annual reports"],
    industries: ["Corporate", "Hospitality", "Education", "Healthcare", "Events", "Real Estate"],
  },
  "banners": {
    slug: "banners",
    icon: "Megaphone",
    title: "Banners",
    tagline: "Visibility at every scale.",
    desc: "Weather-resistant, vibrant banners for indoor and outdoor use. Roller banners, PVC banners, and fabric displays for every setting.",
    materials: ["PVC 440gsm", "PVC 510gsm Blockout", "Fabric Polyester", "Mesh (for wind resistance)"],
    sizes: [
      { name: "Roller Banner", dimensions: "850 × 2000 mm" },
      { name: "Large PVC", dimensions: "Any size" },
      { name: "Pull-up Slim", dimensions: "600 × 2000 mm" },
      { name: "Feather Flag", dimensions: "Custom" },
    ],
    finishes: ["Matte (indoor)", "Gloss (outdoor)", "Hemmed & Eyeleted", "Pole Pockets"],
    useCases: ["Shop fronts", "Trade shows", "Events", "Outdoor advertising", "Restaurant window display"],
    industries: ["Retail", "Events", "Restaurants", "Corporate", "Education", "Hospitality"],
  },
  "stationery": {
    slug: "stationery",
    icon: "PenLine",
    title: "Stationery",
    tagline: "Brand consistency in every touch.",
    desc: "Professional branded stationery that reinforces your identity at every interaction — from letterheads to notepads and envelopes.",
    materials: ["100gsm Bond", "120gsm Offset", "90gsm Writing", "Recycled 100gsm"],
    sizes: [
      { name: "A4 Letterhead", dimensions: "210 × 297 mm" },
      { name: "A5 Notepad", dimensions: "148 × 210 mm" },
      { name: "DL Envelope", dimensions: "110 × 220 mm" },
      { name: "Compliment Slip", dimensions: "210 × 99 mm" },
    ],
    finishes: ["Uncoated", "Silk", "Gloss Header", "Foil Logo"],
    useCases: ["Corporate letterheads", "Staff notepads", "Branded envelopes", "Welcome letters", "Compliment slips"],
    industries: ["Corporate", "Hospitality", "Law Firms", "Healthcare", "Education"],
  },
  "promotional": {
    slug: "promotional",
    icon: "Gift",
    title: "Promotional Materials",
    tagline: "Your brand, in their hands.",
    desc: "From branded merchandise to promotional print collateral — items that extend your brand beyond the premises and into daily life.",
    materials: ["Various (product dependent)", "Cotton", "Recycled", "Coated Board"],
    sizes: [
      { name: "Table Cards", dimensions: "A5 / DL" },
      { name: "Vouchers", dimensions: "85 × 55 mm" },
      { name: "Loyalty Cards", dimensions: "85 × 55 mm" },
      { name: "Custom", dimensions: "Any size" },
    ],
    finishes: ["Gloss", "Matte", "Soft Touch", "Spot UV", "Foil"],
    useCases: ["Loyalty cards", "Gift vouchers", "Table talkers", "Branded merchandise", "Seasonal campaigns"],
    industries: ["Restaurants", "Retail", "Hospitality", "Events", "Corporate", "Health & Wellness"],
  },
};

// ─── Industries ───────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  {
    slug: "restaurants",
    title: "Restaurants & Hospitality",
    tagline: "Print that elevates every dining experience.",
    desc: "From menus to packaging, we deliver print solutions that help hospitality brands communicate quality before a single word is spoken.",
    services: ["Menu Printing", "Packaging", "Flyers & Leaflets", "Business Cards", "Posters", "Stickers & Labels"],
    useCases: ["Table menus", "Takeaway packaging", "Opening promotions", "Seasonal campaigns", "Staff business cards"],
  },
  {
    slug: "retail",
    title: "Retail & Fashion",
    tagline: "Your store, your story.",
    desc: "Retail brands rely on consistent, high-quality print to drive footfall, communicate promotions, and create memorable in-store experiences.",
    services: ["Posters", "Banners", "Flyers & Leaflets", "Packaging", "Stickers & Labels", "Brochures"],
    useCases: ["Window displays", "Sale signage", "Shopping bags", "Hang tags", "Look books"],
  },
  {
    slug: "events",
    title: "Events & Weddings",
    tagline: "Every detail printed to perfection.",
    desc: "From intimate weddings to large-scale corporate events, we produce print collateral that sets the tone and leaves a lasting memory.",
    services: ["Brochures", "Flyers & Leaflets", "Banners", "Business Cards", "Stationery", "Promotional Materials"],
    useCases: ["Event programmes", "Invitations", "Directional signage", "Place cards", "Branded merchandise"],
  },
  {
    slug: "corporate",
    title: "Corporate & Professional",
    tagline: "Professionalism printed in every fibre.",
    desc: "Corporate teams trust us for consistent, polished print materials that reflect their brand standards and reinforce client confidence.",
    services: ["Business Cards", "Stationery", "Brochures", "Banners", "Promotional Materials"],
    useCases: ["Company profiles", "Client proposals", "Conference materials", "Office stationery", "Annual reports"],
  },
  {
    slug: "health",
    title: "Health & Wellness",
    tagline: "Communicate care through quality print.",
    desc: "Healthcare and wellness brands need clear, trustworthy communications. We produce print that conveys professionalism and warmth in equal measure.",
    services: ["Flyers & Leaflets", "Brochures", "Stationery", "Posters", "Business Cards"],
    useCases: ["Patient information leaflets", "Appointment cards", "Treatment menus", "Waiting room posters", "Branded stationery"],
  },
  {
    slug: "education",
    title: "Education & Training",
    tagline: "Print that informs and inspires.",
    desc: "Educational institutions and training providers rely on clear, well-produced print to communicate to students, parents, and staff.",
    services: ["Brochures", "Flyers & Leaflets", "Banners", "Stationery", "Posters"],
    useCases: ["Prospectus booklets", "Open day flyers", "Course guides", "Signage", "Staff stationery"],
  },
];

// ─── Paper types ──────────────────────────────────────────────────────────────
export const PAPER_TYPES = [
  { name: "Gloss", gsm: "90–400gsm", feel: "Shiny, smooth", bestFor: "Photography, magazines, flyers", notFor: "Writing on" },
  { name: "Silk / Satin", gsm: "130–350gsm", feel: "Smooth, semi-sheen", bestFor: "Brochures, menus, business cards", notFor: "High-gloss photography" },
  { name: "Uncoated / Offset", gsm: "80–300gsm", feel: "Natural, tactile", bestFor: "Stationery, notepads, writing paper", notFor: "Vibrant photo reproduction" },
  { name: "Soft Touch", gsm: "350gsm", feel: "Velvety, premium", bestFor: "Luxury business cards, premium brochures", notFor: "Budget projects" },
  { name: "Kraft", gsm: "100–350gsm", feel: "Rough, natural", bestFor: "Eco packaging, rustic branding", notFor: "Full-colour print reproduction" },
  { name: "Recycled", gsm: "100–350gsm", feel: "Slightly textured", bestFor: "Eco-conscious brands, leaflets", notFor: "Ultra-vibrant colour work" },
];

// ─── Finishing techniques ─────────────────────────────────────────────────────
export const FINISHES = [
  {
    name: "Gloss Lamination",
    desc: "A shiny, reflective coating applied to the printed surface. Enhances colour vibrancy and provides excellent durability.",
    bestFor: "Flyers, posters, menus, book covers",
    feel: "Glossy, smooth",
  },
  {
    name: "Matte Lamination",
    desc: "A non-reflective coating that gives a sophisticated, understated look while protecting the print from scuffs and moisture.",
    bestFor: "Business cards, brochures, premium menus",
    feel: "Smooth, flat",
  },
  {
    name: "Soft Touch Lamination",
    desc: "A velvety, rubber-feel coating that creates an ultra-premium tactile experience. Often used for luxury products.",
    bestFor: "Luxury business cards, premium packaging",
    feel: "Velvety, rubber-like",
  },
  {
    name: "Spot UV",
    desc: "A high-gloss UV coating applied to specific areas of the print, creating a striking contrast against a matte background.",
    bestFor: "Business cards, book covers, invitations",
    feel: "Raised gloss highlights",
  },
  {
    name: "Foil Stamping",
    desc: "A metallic foil (gold, silver, rose gold, etc.) pressed onto the surface using heat and pressure, creating a luxurious metallic finish.",
    bestFor: "Wedding stationery, luxury packaging, business cards",
    feel: "Metallic, raised",
  },
  {
    name: "Embossing",
    desc: "Creates a raised (emboss) or recessed (deboss) impression in the paper, adding a tactile, three-dimensional quality.",
    bestFor: "Luxury stationery, premium packaging, book covers",
    feel: "Raised / recessed texture",
  },
  {
    name: "Die Cutting",
    desc: "Custom cutting into any shape beyond a standard rectangle — circles, custom silhouettes, and unique forms.",
    bestFor: "Stickers, packaging, shaped cards, creative flyers",
    feel: "Custom shape",
  },
  {
    name: "Wipe-clean Coating",
    desc: "A specialist coating that allows the printed surface to be wiped clean — ideal for menus and hospitality materials.",
    bestFor: "Restaurant menus, table cards, hospitality prints",
    feel: "Wipeable, durable",
  },
];

// ─── Print sizes ──────────────────────────────────────────────────────────────
export const PRINT_SIZES = [
  { name: "A0", dimensions: "841 × 1189 mm", common: "Large posters, banners" },
  { name: "A1", dimensions: "594 × 841 mm", common: "Posters, exhibition stands" },
  { name: "A2", dimensions: "420 × 594 mm", common: "Posters, window displays" },
  { name: "A3", dimensions: "297 × 420 mm", common: "Menus, posters, certificates" },
  { name: "A4", dimensions: "210 × 297 mm", common: "Flyers, brochures, letterheads" },
  { name: "A5", dimensions: "148 × 210 mm", common: "Flyers, notepads, leaflets" },
  { name: "A6", dimensions: "105 × 148 mm", common: "Postcards, small flyers" },
  { name: "A7", dimensions: "74 × 105 mm", common: "Gift tags, small cards" },
  { name: "DL", dimensions: "99 × 210 mm", common: "Leaflets, letters, menus" },
  { name: "Business Card (UK)", dimensions: "85 × 55 mm", common: "Business cards, loyalty cards" },
  { name: "Square 148", dimensions: "148 × 148 mm", common: "Square flyers, invitations" },
  { name: "Square 210", dimensions: "210 × 210 mm", common: "Square brochures, booklets" },
];

// ─── Print terminology ────────────────────────────────────────────────────────
export const TERMINOLOGY = [
  { term: "Bleed", def: "Extra print area beyond the trim edge (usually 3mm). Ensures no white borders appear after cutting." },
  { term: "CMYK", def: "Cyan, Magenta, Yellow, Key (Black). The four-colour printing process used for full-colour print production." },
  { term: "Crop Marks", def: "Lines at the corners of a print document indicating where the paper should be trimmed." },
  { term: "DPI", def: "Dots Per Inch. The resolution of a printed image. 300 DPI is the standard for high-quality print." },
  { term: "GSM", def: "Grams per Square Metre. The measure of paper weight/thickness. Higher GSM = heavier, thicker paper." },
  { term: "Pantone", def: "A standardised colour matching system used to ensure colour consistency across different print runs." },
  { term: "RGB", def: "Red, Green, Blue. A colour mode used for screens. Must be converted to CMYK before printing." },
  { term: "Safe Zone", def: "The inner area (usually 3–5mm from trim edge) where important content should remain to avoid being cut." },
  { term: "Trim Size", def: "The final dimensions of a printed piece after cutting." },
  { term: "Saddle Stitch", def: "A binding method where staples are placed along the spine fold of a booklet or brochure." },
  { term: "Perfect Binding", def: "A binding technique where pages are glued to a flat spine — used for thicker brochures and books." },
  { term: "Overprint", def: "When one ink colour prints on top of another rather than knocking out the background colour." },
  { term: "Proof", def: "A pre-production sample showing how the final print will look — used to check colour, layout, and content." },
  { term: "Vector", def: "A scalable, resolution-independent file format (e.g. PDF, AI, EPS) — preferred for logos and artwork." },
  { term: "Raster", def: "A pixel-based image (e.g. JPG, PNG). Resolution depends on DPI — must be 300 DPI+ for print." },
];

// ─── Homepage short data ──────────────────────────────────────────────────────
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
