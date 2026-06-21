// ZIFARAA Timepieces — Watch Catalog
// Placeholder data — replace with real supplier products via fetchProducts()

export const COLLECTIONS = [
  {
    id: 'imperiale',
    name: 'Imperiale',
    tagline: 'For the occasion that matters',
    description: 'Dress watches of uncommon restraint. Imperiale was conceived for those who understand that true luxury whispers.',
    cover: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&fm=webp',
    color: '#c9a84c'
  },
  {
    id: 'ascend',
    name: 'Ascend',
    tagline: 'Precision without compromise',
    description: 'Sports luxury at altitude. Ascend watches are built for the executive who refuses to choose between performance and elegance.',
    cover: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&q=80&fm=webp',
    color: '#c9a84c'
  },
  {
    id: 'nox',
    name: 'Nox',
    tagline: 'Darkness, refined',
    description: 'All-black case, DLC-coated steel, ceramic bezels. Nox is for those who move through the world quietly and deliberately.',
    cover: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=80&fm=webp',
    color: '#c9a84c'
  },
  {
    id: 'celeste',
    name: 'Celeste',
    tagline: 'Complications worthy of the cosmos',
    description: 'Gold complications for the collector who considers time an art form. Each Celeste is assembled by a single master watchmaker.',
    cover: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&q=80&fm=webp',
    color: '#c9a84c'
  }
];

export const PRODUCTS = [
  // ── Imperiale Collection ──
  {
    id: 'imp-001',
    name: 'Imperiale Noir',
    collection: 'imperiale',
    price: 4800,
    currency: 'USD',
    description: 'The Imperiale Noir distils a century of dress-watch tradition into a 38mm case of polished 316L steel. Its midnight-blue sunburst dial shifts between navy and black under light, never quite the same twice.',
    specs: {
      movement: 'Swiss Automatic ETA 2824-2',
      caseDiameter: '38mm',
      caseThickness: '8.6mm',
      crystal: 'Sapphire, double anti-reflective',
      waterResistance: '50m',
      powerReserve: '42 hours',
      caseMaterial: '316L Stainless Steel, polished',
      strapMaterial: 'Italian Veau Barenia Calf Leather'
    },
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: true,
    badge: 'Bestseller'
  },
  {
    id: 'imp-002',
    name: 'Imperiale Champagne',
    collection: 'imperiale',
    price: 6200,
    currency: 'USD',
    description: 'A warm champagne dial with applied gold indices and a slim 40mm case in yellow gold PVD. Understated confidence for any boardroom or black-tie occasion.',
    specs: {
      movement: 'Swiss Automatic ETA 2892-A2',
      caseDiameter: '40mm',
      caseThickness: '9.0mm',
      crystal: 'Sapphire, triple anti-reflective',
      waterResistance: '30m',
      powerReserve: '42 hours',
      caseMaterial: '316L Stainless Steel, Yellow Gold PVD',
      strapMaterial: 'Louisiana Alligator Leather'
    },
    images: [
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: false,
    badge: null
  },
  {
    id: 'imp-003',
    name: 'Imperiale Blanc',
    collection: 'imperiale',
    price: 12500,
    currency: 'USD',
    description: 'White lacquer dial, diamond-set hour markers at 12 and 6, and a hand-stitched white ostrich strap. The Imperiale Blanc is ZIFARAA\'s most refined dress watch.',
    specs: {
      movement: 'In-house manual-wind Calibre ZF-01',
      caseDiameter: '37mm',
      caseThickness: '7.8mm',
      crystal: 'Sapphire, curved, double anti-reflective',
      waterResistance: '30m',
      powerReserve: '55 hours',
      caseMaterial: '18K White Gold',
      strapMaterial: 'White Ostrich Leather, hand-stitched'
    },
    images: [
      'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: true,
    badge: 'Limited Edition'
  },

  // ── Ascend Collection ──
  {
    id: 'asc-001',
    name: 'Ascend Titanium',
    collection: 'ascend',
    price: 7800,
    currency: 'USD',
    description: 'Grade-5 titanium case, 44mm, with a brushed anthracite dial and luminous ceramic indices. Certified to 200m water resistance. At 98g on the wrist, you barely notice it until you look down.',
    specs: {
      movement: 'Swiss Automatic ETA 2836-2',
      caseDiameter: '44mm',
      caseThickness: '12.8mm',
      crystal: 'Sapphire with AR coating',
      waterResistance: '200m',
      powerReserve: '42 hours',
      caseMaterial: 'Grade 5 Titanium',
      strapMaterial: 'Rubber with titanium deployant buckle'
    },
    images: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: true,
    badge: 'New Arrival'
  },
  {
    id: 'asc-002',
    name: 'Ascend Chrono',
    collection: 'ascend',
    price: 11200,
    currency: 'USD',
    description: 'A column-wheel chronograph in a 42mm steel case. The bicompax dial layout keeps the three counters uncluttered — pulsometer scale, elapsed minutes, running seconds.',
    specs: {
      movement: 'Swiss Automatic Valjoux 7753',
      caseDiameter: '42mm',
      caseThickness: '14.2mm',
      crystal: 'Sapphire, flat, AR coated',
      waterResistance: '100m',
      powerReserve: '46 hours',
      caseMaterial: '316L Stainless Steel, satin-brushed',
      strapMaterial: 'Rubber / integrated steel bracelet option'
    },
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: false,
    badge: null
  },
  {
    id: 'asc-003',
    name: 'Ascend GMT',
    collection: 'ascend',
    price: 9400,
    currency: 'USD',
    description: 'A 41mm GMT in brushed steel. The second time zone is read from a bi-directional 24-hour bezel, the third from an additional hand sweeping the primary dial.',
    specs: {
      movement: 'Swiss Automatic ETA 2893-2 GMT',
      caseDiameter: '41mm',
      caseThickness: '11.4mm',
      crystal: 'Sapphire, domed, AR coated',
      waterResistance: '100m',
      powerReserve: '42 hours',
      caseMaterial: '316L Stainless Steel',
      strapMaterial: 'Nylon NATO / steel bracelet'
    },
    images: [
      'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fm=webp'
    ],
    inStock: false,
    featured: false,
    badge: 'Coming Soon'
  },

  // ── Nox Collection ──
  {
    id: 'nox-001',
    name: 'Nox Stealth',
    collection: 'nox',
    price: 5400,
    currency: 'USD',
    description: 'Full DLC-coated case, matte black ceramic bezel, and a black-on-black skeletonised dial. The Nox Stealth is invisible in shadow, extraordinary in light.',
    specs: {
      movement: 'Swiss Automatic ETA 2824-2',
      caseDiameter: '42mm',
      caseThickness: '11.8mm',
      crystal: 'Sapphire, anti-reflective',
      waterResistance: '100m',
      powerReserve: '42 hours',
      caseMaterial: '316L Steel with Diamond-Like Carbon coating',
      strapMaterial: 'Black rubber with DLC deployant'
    },
    images: [
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: true,
    badge: null
  },
  {
    id: 'nox-002',
    name: 'Nox Carbon',
    collection: 'nox',
    price: 8900,
    currency: 'USD',
    description: 'Forged carbon fibre case, 44mm. The distinctive diagonal weave pattern is visible through the sapphire caseback. One of the lightest luxury watches ZIFARAA curates.',
    specs: {
      movement: 'Swiss Automatic ETA 2836-2',
      caseDiameter: '44mm',
      caseThickness: '13.0mm',
      crystal: 'Sapphire front and back',
      waterResistance: '50m',
      powerReserve: '42 hours',
      caseMaterial: 'Forged Carbon Fibre',
      strapMaterial: 'Alcantara textile strap'
    },
    images: [
      'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: false,
    badge: 'Exclusive'
  },
  {
    id: 'nox-003',
    name: 'Nox Phantom',
    collection: 'nox',
    price: 3800,
    currency: 'USD',
    description: 'The Nox entry point. 40mm, black PVD steel, tritium gas-tube lume that glows for decades without charging. A serious watch at an entry price.',
    specs: {
      movement: 'Swiss Automatic SW200-1',
      caseDiameter: '40mm',
      caseThickness: '10.4mm',
      crystal: 'Sapphire, AR coated',
      waterResistance: '200m',
      powerReserve: '38 hours',
      caseMaterial: '316L Steel, Black PVD',
      strapMaterial: 'Black tropic rubber'
    },
    images: [
      'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: false,
    badge: null
  },

  // ── Celeste Collection ──
  {
    id: 'cel-001',
    name: 'Celeste Tourbillon',
    collection: 'celeste',
    price: 45000,
    currency: 'USD',
    description: 'A flying tourbillon at 6 o\'clock in an 18K rose gold case. The movement, assembled by a single watchmaker over three months, is visible through the open-worked dial.',
    specs: {
      movement: 'In-house manual-wind Tourbillon Calibre ZF-T1',
      caseDiameter: '42mm',
      caseThickness: '10.2mm',
      crystal: 'Sapphire, flat, anti-reflective both sides',
      waterResistance: '30m',
      powerReserve: '72 hours',
      caseMaterial: '18K Rose Gold',
      strapMaterial: 'Hornback Crocodile, hand-stitched, rose gold buckle'
    },
    images: [
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: true,
    badge: 'ZIFARAA Signature'
  },
  {
    id: 'cel-002',
    name: 'Celeste Moonphase',
    collection: 'celeste',
    price: 22000,
    currency: 'USD',
    description: 'Grand feu enamel dial with a moonphase complication accurate to one day in 122 years. The crescent is set with 23 individually placed diamonds.',
    specs: {
      movement: 'Swiss Automatic with moonphase module',
      caseDiameter: '39mm',
      caseThickness: '9.8mm',
      crystal: 'Sapphire, curved, anti-reflective',
      waterResistance: '30m',
      powerReserve: '48 hours',
      caseMaterial: '18K Yellow Gold',
      strapMaterial: 'Blue alligator, 18K gold buckle'
    },
    images: [
      'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fm=webp'
    ],
    inStock: true,
    featured: true,
    badge: 'Collector\'s Choice'
  },
  {
    id: 'cel-003',
    name: 'Celeste Perpetuel',
    collection: 'celeste',
    price: 34000,
    currency: 'USD',
    description: 'A perpetual calendar that accounts for leap years until 2100. Day, date, month, and year displayed with the typographic clarity of a Swiss railway clock.',
    specs: {
      movement: 'Swiss Automatic perpetual calendar Calibre',
      caseDiameter: '41mm',
      caseThickness: '11.6mm',
      crystal: 'Sapphire, flat, double AR coating',
      waterResistance: '30m',
      powerReserve: '55 hours',
      caseMaterial: '18K White Gold with diamond bezel',
      strapMaterial: 'Black alligator, white gold deployant'
    },
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&fm=webp',
      'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fm=webp'
    ],
    inStock: false,
    featured: false,
    badge: 'Sold Out'
  }
];

// Integration hook: replace body with real API call
export async function fetchProducts() {
  // const res = await fetch('https://api.zifaraa.com/products');
  // return res.json();
  return Promise.resolve(PRODUCTS);
}

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

export function getProductsByCollection(collectionId) {
  return PRODUCTS.filter(p => p.collection === collectionId);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

export function formatPrice(amount, currency = 'USD', locale = 'en') {
  const localeMap = { en: 'en-US', ar: 'ar-SA', fa: 'fa-IR' };
  return new Intl.NumberFormat(localeMap[locale] || 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}
