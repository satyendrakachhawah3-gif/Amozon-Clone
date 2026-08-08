export const CATEGORIES = [
  'All Departments',
  'Electronics',
  'Laptops & Computers',
  'Smart Home',
  'Fashion & Apparel',
  'Home & Kitchen',
  'Books & Gaming'
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Tech Week Deals',
    subtitle: 'Save up to 40% on flagship headphones, laptops & accessories',
    badge: 'LIMITED TIME OFFER',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Shop Tech Deals',
    categoryId: 'Electronics',
    bgGradient: 'linear-gradient(to right, #131921 0%, #1e293b 100%)'
  },
  {
    id: 2,
    title: 'Upgrade Your Home Workspace',
    subtitle: 'Ergonomic chairs, OLED monitors, and smart desk setups',
    badge: 'PRIME EXCLUSIVE',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Explore Workspace',
    categoryId: 'Laptops & Computers',
    bgGradient: 'linear-gradient(to right, #0f172a 0%, #131921 100%)'
  },
  {
    id: 3,
    title: 'Smart Living & Automation',
    subtitle: 'Echo devices, smart lighting, and security systems on sale',
    badge: 'TOP TRENDING',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Discover Smart Home',
    categoryId: 'Smart Home',
    bgGradient: 'linear-gradient(to right, #1a202c 0%, #2d3748 100%)'
  },
  {
    id: 4,
    title: 'Summer Fashion & Accessories',
    subtitle: 'Premium watches, eyewear, and athletic sneakers',
    badge: 'NEW ARRIVALS',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Shop Fashion',
    categoryId: 'Fashion & Apparel',
    bgGradient: 'linear-gradient(to right, #1e1b4b 0%, #312e81 100%)'
  }
];

export const CATEGORY_TILES = [
  {
    id: 'tech-deals',
    title: 'Deals in Electronics',
    linkText: 'See all tech deals',
    items: [
      { name: 'Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80' },
      { name: 'Monitors', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80' },
      { name: 'Smartwatches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80' },
      { name: 'Cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80' }
    ]
  },
  {
    id: 'home-refresh',
    title: 'Refresh Your Space',
    linkText: 'Shop home & kitchen',
    items: [
      { name: 'Coffee Makers', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=300&q=80' },
      { name: 'Air Fryers', image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=300&q=80' },
      { name: 'Decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80' },
      { name: 'Bedding', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=300&q=80' }
    ]
  },
  {
    id: 'fashion-trends',
    title: 'Fashion & Style',
    linkText: 'Explore clothing & shoes',
    items: [
      { name: 'Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80' },
      { name: 'Watches', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=300&q=80' },
      { name: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=300&q=80' },
      { name: 'Backpacks', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80' }
    ]
  },
  {
    id: 'gaming-zone',
    title: 'Gaming & Entertainment',
    linkText: 'See top gaming gear',
    items: [
      { name: 'Consoles', image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=300&q=80' },
      { name: 'Controllers', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=300&q=80' },
      { name: 'VR Headsets', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?auto=format&fit=crop&w=300&q=80' },
      { name: 'Keyboards', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80' }
    ]
  }
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Sony WH-1000XM5 Wireless Industry-Leading Noise Canceling Headphones',
    brand: 'Sony',
    category: 'Electronics',
    price: 348.00,
    originalPrice: 399.99,
    rating: 4.7,
    reviewCount: 14820,
    isPrime: true,
    isDeal: true,
    dealBadge: '28% OFF',
    inStock: true,
    stockCount: 18,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Industry-leading noise cancellation optimized to two processors and 8 microphones',
      'Magnificent sound quality with new Integrated Processor V1',
      'Crystal clear hands-free calling with 4 beamforming microphones and AI noise reduction',
      'Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)',
      'Ultra-comfortable lightweight design with soft fit leather'
    ],
    description: 'The WH-1000XM5 wireless headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise canceling and exceptional call quality.',
    specs: {
      'Connectivity': 'Bluetooth 5.2, 3.5mm Aux',
      'Battery Life': 'Up to 30 Hours',
      'Weight': '250g',
      'Color': 'Black',
      'Warranty': '1 Year Manufacturer'
    }
  },
  {
    id: 'prod-2',
    title: 'Apple MacBook Pro 16" M3 Max Chip (36GB RAM, 1TB SSD Storage) - Space Black',
    brand: 'Apple',
    category: 'Laptops & Computers',
    price: 3299.00,
    originalPrice: 3499.00,
    rating: 4.9,
    reviewCount: 3250,
    isPrime: true,
    isDeal: false,
    dealBadge: null,
    inStock: true,
    stockCount: 8,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'SUPERCHARGED BY M3 MAX: 16-core CPU and up to 40-core GPU for extreme workflows',
      'UP TO 22 HOURS BATTERY LIFE: Go all day thanks to power-efficient Apple Silicon',
      'BRILLIANT PRO MOTION DISPLAY: 16.2-inch Liquid Retina XDR with 1000 nits sustained brightness',
      'FULLY CONNECTED: Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3',
      'SIX-SPEAKER SOUND SYSTEM: Studio-quality mics and spatial audio support'
    ],
    description: 'The 16-inch MacBook Pro blasts forward with M3 Max, an insanely advanced chip that brings massive performance and capabilities for extreme workflows.',
    specs: {
      'Processor': 'Apple M3 Max 16-core',
      'RAM': '36GB Unified Memory',
      'Storage': '1TB NVMe SSD',
      'Display': '16.2" Liquid Retina XDR (3456 x 2234)',
      'OS': 'macOS Sequoia'
    }
  },
  {
    id: 'prod-3',
    title: 'Echo Dot (5th Gen, 2022 release) | Smart Speaker with Alexa - Charcoal',
    brand: 'Amazon',
    category: 'Smart Home',
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviewCount: 89400,
    isPrime: true,
    isDeal: true,
    dealBadge: '30% OFF',
    inStock: true,
    stockCount: 150,
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'OUR BEST SOUNDING ECHO DOT YET: Clearer vocals, deeper bass and vibrant sound in any room',
      'YOUR FAVORITE MUSIC AND CONTENT: Play music, audiobooks, and podcasts from Amazon Music, Apple Music, Spotify',
      'ALEXA IS HAPPY TO HELP: Ask Alexa for weather updates, set hands-free timers, get answers',
      'KEEP YOUR HOME COMFORTABLE: Control compatible smart home devices with your voice and routines built-in',
      'BUILT-IN PRIVACY CONTROLS: Includes a microphone off button that electronically disconnects the mics'
    ],
    description: 'Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass, and vibrant sound in any room.',
    specs: {
      'Voice Assistant': 'Amazon Alexa',
      'Connectivity': 'Dual-band Wi-Fi, Bluetooth',
      'Dimensions': '3.9” x 3.9” x 3.5”',
      'Weight': '304g',
      'Color': 'Charcoal'
    }
  },
  {
    id: 'prod-4',
    title: 'Nike Air Max 270 Men\'s Running Shoes & Athletic Sneakers',
    brand: 'Nike',
    category: 'Fashion & Apparel',
    price: 129.95,
    originalPrice: 160.00,
    rating: 4.8,
    reviewCount: 9420,
    isPrime: true,
    isDeal: true,
    dealBadge: '19% OFF',
    inStock: true,
    stockCount: 32,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Large Max Air unit delivers responsive cushioning for every step',
      'Neoprene stretch bootie construction delivers a snug, sock-like fit',
      '3-piece midsole offers durability and smooth transition',
      'Mesh details throughout provide lightweight breathability',
      'Durable rubber outsole provides excellent traction on multiple surfaces'
    ],
    description: 'Boasting the first-ever Max Air unit created specifically for Nike Sportswear, Nike Air Max 270 delivers visible air under every step.',
    specs: {
      'Material': 'Breathable Mesh & Synthetic',
      'Sole Material': 'Rubber Air Max Sole',
      'Closure': 'Lace-Up',
      'Color': 'Red / Black / White',
      'Gender': 'Men'
    }
  },
  {
    id: 'prod-5',
    title: 'Breville Barista Touch Impress Espresso Machine with Automatic Milk Frothing',
    brand: 'Breville',
    category: 'Home & Kitchen',
    price: 1199.95,
    originalPrice: 1499.95,
    rating: 4.8,
    reviewCount: 4120,
    isPrime: true,
    isDeal: true,
    dealBadge: '20% OFF',
    inStock: true,
    stockCount: 10,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Impress Puck System reduces mess and delivers precise dose and assisted tamping',
      'Auto MilQ hands-free microfoam texturing with settings for Dairy, Oat, Almond & Soy',
      'ThermoJet heating system achieves optimum extraction temperature in 3 seconds',
      'Intuitive touch screen with pre-programmed cafe drinks & customizable recipes',
      'Precision conical burr grinder with 30 grind settings'
    ],
    description: 'Experience third wave specialty coffee at home with step-by-step barista guidance at your fingertips. Deliver perfect dose and tamping with zero hassle.',
    specs: {
      'Water Tank Capacity': '67 fl oz (2L)',
      'Bean Hopper': '12 oz',
      'Pressure': '15 Bar Italian Pump',
      'Power': '1800 Watts',
      'Material': 'Stainless Steel'
    }
  },
  {
    id: 'prod-6',
    title: 'PlayStation 5 Console (Slim Slim Edition) + Marvel\'s Spider-Man 2 Bundle',
    brand: 'Sony',
    category: 'Books & Gaming',
    price: 499.00,
    originalPrice: 559.99,
    rating: 4.9,
    reviewCount: 38400,
    isPrime: true,
    isDeal: true,
    dealBadge: '11% OFF',
    inStock: true,
    stockCount: 22,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'SLIM DESIGN: Packed with powerful gaming technology in a sleek, compact hardware frame',
      '1TB ULTRA-HIGH SPEED SSD: Load games near instantly with custom SSD architecture',
      'DUALSENSE CONTROLLER: Haptic feedback, adaptive triggers, and 3D Audio immersion',
      'RAY TRACING: Experience true-to-life shadows and reflections at up to 120fps with 4K output',
      'INCLUDES SPIDER-MAN 2: Full game digital voucher code included'
    ],
    description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.',
    specs: {
      'Storage': '1TB Custom NVMe SSD',
      'Resolution': '4K UHD, HDR, Up to 120Hz',
      'Audio': 'Tempest 3D AudioTech',
      'Included Game': 'Spider-Man 2',
      'Controller': 'DualSense Wireless Controller'
    }
  },
  {
    id: 'prod-7',
    title: 'Samsung Odyssey OLED G9 49" Curved Dual QHD Gaming Monitor 240Hz 0.03ms',
    brand: 'Samsung',
    category: 'Laptops & Computers',
    price: 1199.99,
    originalPrice: 1799.99,
    rating: 4.6,
    reviewCount: 1890,
    isPrime: true,
    isDeal: true,
    dealBadge: '33% OFF',
    inStock: true,
    stockCount: 6,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'REVOLUTIONARY OLED PERFORMANCE: Neo Quantum Processor Pro optimizes every frame',
      '49" DUAL QHD DISPLAY: Enthralling 1800R curved screen equivalent to two QHD monitors side-by-side',
      '240Hz REFRESH RATE & 0.03ms RESPONSE TIME: Ultra-smooth movement with G-Sync compatibility',
      'GAMING HUB INTEGRATION: Stream your favorite cloud games directly without a PC or console',
      'SLIM METAL DESIGN: Premium finish with CoreSync RGB lighting back panel'
    ],
    description: 'Submerge yourself in expansive worlds with the 49-inch Odyssey OLED G9. Deep blacks, vivid colors, and ultra-fast response rates elevate every gaming session.',
    specs: {
      'Screen Size': '49 Inches (Curved 1800R)',
      'Resolution': 'Dual QHD (5120 x 1440)',
      'Refresh Rate': '240Hz',
      'Response Time': '0.03ms GtG',
      'Panel Type': 'OLED'
    }
  },
  {
    id: 'prod-8',
    title: 'Fossil Men\'s Minimalist Stainless Steel Casual Quartz Watch',
    brand: 'Fossil',
    category: 'Fashion & Apparel',
    price: 84.00,
    originalPrice: 140.00,
    rating: 4.7,
    reviewCount: 11200,
    isPrime: true,
    isDeal: true,
    dealBadge: '40% OFF',
    inStock: true,
    stockCount: 45,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Sleek 44mm case size with minimalist black satin dial and gold-tone hands',
      'Durable stainless steel bracelet band with fold-over clasp',
      'Quartz movement with analog 3-hand display',
      'Water resistant to 50m (165ft): suitable for short periods of recreational swimming',
      'Scratch-resistant mineral crystal lens'
    ],
    description: 'Designed for the modern gentleman, The Minimalist pairs a slim case with clean hour markers for timeless elegance.',
    specs: {
      'Case Size': '44mm',
      'Band Width': '22mm',
      'Movement': 'Quartz Analog',
      'Water Resistance': '5 ATM / 50 meters',
      'Band Material': 'Stainless Steel'
    }
  },
  {
    id: 'prod-9',
    title: 'Ring Video Doorbell Plus | 1536p HD Video, Head-to-Toe View, Color Night Vision',
    brand: 'Ring',
    category: 'Smart Home',
    price: 119.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviewCount: 22100,
    isPrime: true,
    isDeal: true,
    dealBadge: '20% OFF',
    inStock: true,
    stockCount: 60,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'HEAD-TO-TOE HD VIDEO: Expanded 1536p video field lets you see visitors and package deliveries',
      'PACKAGE ALERTS: Receive instant notifications when a package is detected in designated zones',
      'COLOR NIGHT VISION: Clear visibility even after dark with advanced color sensor',
      'TWO-WAY TALK: Speak to visitors at your door from anywhere via smartphone or Alexa',
      'EASY RECHARGEABLE BATTERY: Quick-release battery pack for convenient charging'
    ],
    description: 'See more of who is there with Head-to-Toe HD Video, package alerts, and crystal-clear two-way audio connected right to your phone.',
    specs: {
      'Video Resolution': '1536p HD Video',
      'Field of View': '150° Horizontal, 150° Vertical',
      'Power Source': 'Quick-Release Battery Pack',
      'Connectivity': '2.4 GHz Wi-Fi',
      'App Support': 'Ring App (iOS & Android)'
    }
  },
  {
    id: 'prod-10',
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits by James Clear',
    brand: 'Avery',
    category: 'Books & Gaming',
    price: 13.79,
    originalPrice: 27.00,
    rating: 4.9,
    reviewCount: 135000,
    isPrime: true,
    isDeal: true,
    dealBadge: '49% OFF',
    inStock: true,
    stockCount: 200,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '#1 NEW YORK TIMES BESTSELLER: Over 15 million copies sold worldwide',
      'PRACTICAL STRATEGIES: Learn exact steps to form good habits and break bad ones',
      'REAL WORLD EXAMPLES: Insights from Olympic gold medalists, CEOs, and scientists',
      'SYSTEM OVER GOALS: Shift focus from outcomes to identity-driven daily systems',
      'HARDCOVER EDITION: High-quality binding with ribbon bookmark'
    ],
    description: 'Atomic Habits provides a proven framework for improving every day. James Clear reveals practical strategies that teach you how to form good habits and master tiny behaviors that lead to remarkable results.',
    specs: {
      'Author': 'James Clear',
      'Format': 'Hardcover',
      'Pages': '320 Pages',
      'Publisher': 'Avery',
      'Language': 'English'
    }
  },
  {
    id: 'prod-11',
    title: 'Anker 737 Power Bank (PowerCore 24K), 24,000mAh 3-Port Laptop Portable Charger 140W',
    brand: 'Anker',
    category: 'Electronics',
    price: 109.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviewCount: 15400,
    isPrime: true,
    isDeal: true,
    dealBadge: '27% OFF',
    inStock: true,
    stockCount: 40,
    image: 'https://images.unsplash.com/photo-1609592424074-9efd054d90f2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609592424074-9efd054d90f2?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'ULTRA-POWERFUL TWO-WAY CHARGING: Equipped with Power Delivery 3.1 and 140W max output',
      'HIGH CAPACITY 24,000mAh: Charge an iPhone 13 almost 5 times or a 2021 MacBook Pro 14" 1.3 times',
      'SMART DIGITAL DISPLAY: Easy-to-read screen shows output power, input power, and estimated recharge time',
      'CHARGE 3 DEVICES AT ONCE: Features 2x USB-C ports and 1x USB-A port',
      'ACTIVE SHIELD 2.0: Real-time temperature monitoring for ultimate charging safety'
    ],
    description: 'Never run out of power on the go. Anker 737 delivers blazing fast 140W fast-charging for laptops, phones, and tablets with smart real-time telemetry display.',
    specs: {
      'Capacity': '24,000 mAh',
      'Output Max': '140W Power Delivery',
      'Ports': '2x USB-C, 1x USB-A',
      'Weight': '630g',
      'Screen': 'Color Smart Digital Display'
    }
  },
  {
    id: 'prod-12',
    title: 'Ray-Ban RB3025 Classic Aviator Sunglasses - Gold Frame / G-15 Green Lens',
    brand: 'Ray-Ban',
    category: 'Fashion & Apparel',
    price: 163.00,
    originalPrice: 180.00,
    rating: 4.7,
    reviewCount: 28900,
    isPrime: true,
    isDeal: false,
    dealBadge: null,
    inStock: true,
    stockCount: 50,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'UNISEX CLASSIC AVIATOR: Iconic teardrop shape originally created for US Aviators in 1937',
      '100% UV PROTECTION: G-15 crystal glass lenses absorb 85% of visible light and block UV rays',
      'DURABLE METAL FRAME: Premium gold-plated metal construction with comfortable nose pads',
      'INCLUDES LEATHER CASE: Comes with original Ray-Ban protective case and microfiber cloth',
      'MADE IN ITALY: Handcrafted with timeless Italian precision'
    ],
    description: 'Currently one of the most iconic sunglass models in the world, Ray-Ban Aviator Classic sunglasses were originally designed for U.S. aviators in 1937.',
    specs: {
      'Frame Material': 'Gold Metal',
      'Lens Color': 'G-15 Green Glass',
      'Lens Width': '58mm',
      'Protection': '100% UV400 Protection',
      'Origin': 'Made in Italy'
    }
  }
];
