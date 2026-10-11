export interface PackageItem {
  id: string;
  title: string;
  region: 'Nepal' | 'Sandakphu' | 'Darjeeling' | 'Sikkim';
  locationDisplay: string;
  duration: string;
  durationDays: number;
  altitudeDisplay: string;
  maxAltitudeMeters: number;
  altitudeIcon: string;
  price: number;
  originalPrice?: number;
  description: string;
  highlights: string[];
  imageUrl: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  bestSeason: string;
  groupSize: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    altitude: string;
    stay: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  gearChecklist: string[];
}

export interface VideoStory {
  id: string;
  title: string;
  routeKicker: string;
  duration: string;
  thumbnailUrl: string;
  videoTitle: string;
  location: string;
  altitude: string;
  description: string;
  routeHighlights: string[];
  elevationProfile: { point: string; elevation: number }[];
}

export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  avatarBg: string;
  avatarText: string;
  rating: number;
  review: string;
  packageName: string;
  verified: boolean;
  date: string;
  location?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  hometown: string;
  languages: string[];
  certifications: string[];
  bio: string;
  favoriteTrek: string;
  imageUrl: string;
}

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'mardi-himal',
    title: 'Mardi Himal Trek',
    region: 'Nepal',
    locationDisplay: 'Nepal',
    duration: '7 Night 8 Days',
    durationDays: 8,
    altitudeDisplay: '4,500m Base Camp',
    maxAltitudeMeters: 4500,
    altitudeIcon: 'altitude',
    price: 25500,
    originalPrice: 28500,
    description: 'The Mardi Himal Trek, a hidden gem in the Annapurna region of Nepal, offers an exhilarating adventure through serene rhododendron forests, terraced fields, and panoramic vistas of Machapuchare (Fishtail) and Annapurna peaks.',
    highlights: ['Machhapuchhre View', 'Jungle & Meadows', 'Gurung Villages'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYFOem1ObQ0FDQy3ha4csuPRqzLxBUl9MROvIsWZyukJjkRn7svSa7PArEo1HWWxFZIOFZhnMG6y5uVv1Y8VggS-UM-GJjb7jZZNowhKyK10ui6hNqeGe3eJL4G9K-Fulak7nH_7IeYZ4vxZ5BxPh7fAnDLQ9tF_LipiyZIbbxX4tOjS9qc1vNB0H90g3SL8EK88KMhUWh-DfWlqMTfxMMxF17YWAgEMdX2apg6TthH48zW2-gzWvr',
    difficulty: 'Moderate',
    bestSeason: 'March - May & Sept - Dec',
    groupSize: '4 - 12 Trekkers',
    itinerary: [
      { day: 1, title: 'Arrival in Pokhara to Kande & Trek to Forest Camp', description: 'Scenic drive to Kande followed by trek through shaded oak and rhododendron paths.', altitude: '2,550m', stay: 'Forest Teahouse Lodge' },
      { day: 2, title: 'Forest Camp to Low Camp', description: 'Ascend along the ridge enjoying glimpses of Mt. Machhapuchhre towering ahead.', altitude: '2,970m', stay: 'Alpine Wooden Lodge' },
      { day: 3, title: 'Low Camp to High Camp', description: 'Trek above the treeline into alpine pastures with 360-degree views of the Annapurnas.', altitude: '3,580m', stay: 'High Camp Panorama Lodge' },
      { day: 4, title: 'Sunrise Excursion to Mardi Himal Base Camp & Return to High Camp', description: 'Pre-dawn climb to Mardi Himal Base Camp (4,500m). Eye-level views of Machapuchare face.', altitude: '4,500m', stay: 'High Camp Lodge' },
      { day: 5, title: 'High Camp to Siding Village', description: 'Descend through traditional Gurung village homestays with organic local food.', altitude: '1,750m', stay: 'Traditional Homestay' },
      { day: 6, title: 'Siding to Lumre & Drive back to Pokhara', description: 'Gentle walk down to Lumre and scenic transfer back to Pokhara lakeside.', altitude: '820m', stay: 'Lakeside Hotel' },
      { day: 7, title: 'Pokhara Sightseeing & Rest Day', description: 'Boating on Phewa lake, world peace pagoda visit, and relaxation.', altitude: '820m', stay: 'Lakeside Hotel' },
      { day: 8, title: 'Departure', description: 'Farewell breakfast and onward transfer toward Kathmandu or flight home.', altitude: '820m', stay: 'Departure' }
    ],
    inclusions: [
      'ACAP & TIMS National Park Trekking Permits',
      'Certified high-altitude mountain guide & licensed porters (2:1 ratio)',
      'All teahouse / homestay accommodations during trek',
      'All meals on trail (Hearty breakfast, lunch, hot dinner, tea/coffee)',
      'Medical first-aid kit & emergency pulse oximeter monitoring',
      'Pokhara private ground transfers to/from trailhead'
    ],
    exclusions: [
      'International / domestic airfares to Pokhara',
      'Personal trekking gear & sleeping bag (rental available)',
      'Personal travel & high-altitude evacuation insurance',
      'Beverages, bottled water, hot showers and battery recharging'
    ],
    gearChecklist: [
      'Sturdy waterproof trekking boots (broken in)',
      'Warm down jacket (-10°C rated)',
      'Moisture-wicking thermal inner layers (2 pairs)',
      'Fleece jacket and windproof/waterproof shell',
      'UV protective polarized sunglasses',
      'Trekking poles with snow baskets'
    ]
  },
  {
    id: 'sandakphu-tour',
    title: 'Sandakphu Tour',
    region: 'Sandakphu',
    locationDisplay: 'Sandakphu',
    duration: '3 Night 4 Days',
    durationDays: 4,
    altitudeDisplay: 'Highest Point in WB (11,930 ft)',
    maxAltitudeMeters: 3636,
    altitudeIcon: 'landscape',
    price: 17500,
    originalPrice: 19800,
    description: 'Experience the highest point of West Bengal! An unforgettable journey through the breathtaking Singalila Ridge where India and Nepal meet, witnessing spectacular panoramas of Everest and Kanchenjunga.',
    highlights: ['Sleeping Buddha View', 'Singalila Ridge', 'Border Homestays'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY6dAYsI6DPhtqvEJ1k3PkhkdnnaQyBSxl-et7a04sub6OepkNkGLvvmVHGFdIoPotr6K-0Qal0k2jdRCYWVzN96LHQ3a_eQX8NO_ZeNzTCV7G5TdlNbsB-rGEe0Dz5n6Pt_CGHHKfvBmFlb8z5xb_rpOq6aonk8J1vnJgwPnUCFR24y1lzSuD_5BWFyZB9-iqWg8f6L6PWIw1qlv8oBT0hropEOda0hnn0PYMCXz4q8Eh1NbvWlja',
    difficulty: 'Moderate',
    bestSeason: 'Oct - May (Snow in Jan-Feb, Rhododendrons in April)',
    groupSize: '2 - 10 Trekkers / 4x4 Safari',
    itinerary: [
      { day: 1, title: 'Maneybhanjan / Dhotrey to Tumling', description: 'Start ridge journey via vintage 4x4 Land Rover or scenic hike into Nepal border hamlet.', altitude: '2,970m', stay: 'Tumling Wooden Homestay' },
      { day: 2, title: 'Tumling to Sandakphu via Kalipokhri', description: 'Pass sacred black pond Kalipokhri and climb to the top of Bengal at 11,930 ft for sunset.', altitude: '3,636m', stay: 'Sandakphu Ridge Guest House' },
      { day: 3, title: 'Sandakphu Sunrise & Ridge Traverse to Phalut / Gurdum', description: 'Panoramic view of Mt. Everest, Lhotse, Makalu & Kanchenjunga Sleeping Buddha at dawn.', altitude: '3,600m', stay: 'Alpine Valley Lodge' },
      { day: 4, title: 'Descend to Srikhola & Return to Darjeeling / NJP', description: 'Walk across the wooden suspension bridge at Srikhola and transfer back.', altitude: '1,900m', stay: 'Departure' }
    ],
    inclusions: [
      'Singalila National Park entry fees & wildlife cess',
      'Private 4x4 vintage Land Rover / Mahindra Bolero for entire mountain route',
      'All nights in curated warm border homestays with heating blankets',
      'All local Sherpa home-cooked meals (momos, thukpa, dal bhat)',
      'Experienced Singalila forest-certified local guide'
    ],
    exclusions: [
      'Transfers to/from NJP railway station or Bagdogra airport (available on request)',
      'Personal snacks, alcohol, camera entry fees in Nepal side',
      'Tips for driver and local guide'
    ],
    gearChecklist: [
      'Heavy woolens, fleece & windproof outer jacket',
      'Gloves, woolen beanie & neck gaiter',
      'Thermal wear & comfortable walking shoes',
      'High-capacity power bank (limited electricity on ridge)'
    ]
  },
  {
    id: 'canyoning-adventure',
    title: 'Canyoning Adventure',
    region: 'Darjeeling',
    locationDisplay: 'Darjeeling',
    duration: '1 Night 2 Days',
    durationDays: 2,
    altitudeDisplay: 'Waterfall Rappelling',
    maxAltitudeMeters: 1800,
    altitudeIcon: 'kayaking',
    price: 3500,
    originalPrice: 4200,
    description: 'Experience the thrill of canyoning in the Himalayas! Navigate through stunning waterfalls, natural rock slides, river trekking, and deep canyon pools with certified adventure gear and guides.',
    highlights: ['Rock Slides', 'River Trekking', 'Certified Gear'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y1uYzxJQRDAdpA49ZyYOtgLgHULdqNSSDJO47Ur7IjK2Vxp0EvxWCMMnNGd7FhNwXf-o6Rj3DUyoALtnQewEJMirqYCxMRCqD1honKdIc5uOcnlCLIJUDd9oRclFCM1P9k4IrzyFOrEoWG6Elf-uwMj9FZHuMqHE-RYcmujprPJ8H_aHxfUW639UqJbErdWRvna58B24U8z11LtOG_wEmIN3nlWmegwGnNWHhDLKKpMpVXMpPOsX',
    difficulty: 'Easy',
    bestSeason: 'Sept - May (Clear mountain streams)',
    groupSize: '2 - 15 Adventurers',
    itinerary: [
      { day: 1, title: 'Arrival at Darjeeling Gorge Camp & Technical Briefing', description: 'Meet the rescue team, gear fitting (wetsuit, helmet, canyoning harness), basic rappelling practice.', altitude: '1,500m', stay: 'Riverside Pine Eco-Camp' },
      { day: 2, title: 'Full-Day Waterfall Descent & River Trek', description: 'Descend 3 cascading waterfalls (up to 45m rappel), natural rock slides, and cliff jumps into crystal mountain pools.', altitude: '1,300m', stay: 'Departure' }
    ],
    inclusions: [
      'CE & UIAA certified canyoning harnesses, helmets, ropes, and 5mm neoprene wetsuits',
      'Rescue 3 International certified canyoning instructors & safety spotters',
      'Campfire evening BBQ and river campsite tent stay',
      'All meals: welcome tea, lunch, camp dinner, energy snacks on river',
      'GoPro action photos & 4K video reel capture'
    ],
    exclusions: [
      'Transport to canyoning base camp (available from Darjeeling Mall/Ghum)',
      'Personal change of clothes and water booties'
    ],
    gearChecklist: [
      'Quick-dry swimwear and extra change of thermal clothes',
      'Old sneakers or canyoning water shoes with good rubber grip',
      'Dry bag for personal phone and medications'
    ]
  },
  {
    id: 'goecha-la-trek',
    title: 'Goecha La High Alpine Trek',
    region: 'Sikkim',
    locationDisplay: 'West Sikkim',
    duration: '9 Night 10 Days',
    durationDays: 10,
    altitudeDisplay: '4,940m View Point 1',
    maxAltitudeMeters: 4940,
    altitudeIcon: 'altitude',
    price: 32000,
    originalPrice: 35000,
    description: 'The legendary trek in Kanchenjunga National Park (UNESCO World Heritage Site). Witness Mount Kanchenjunga, Pandim, and Kabru face-to-face from sacred Samiti Lake and Goecha La pass.',
    highlights: ['Kanchenjunga Close-Up', 'Samiti Lake', 'Dzongri Sunrise'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNQK0so_26MTj52e5wRozgcAwJj71zg93awX8ZlABBse_pbmf-nG0PSUOyky_oVOpmF-lLhqIBWNHtMPYgQjrReya0T_6KpZHBGG284jCz-E7-q-jHcZdNoN9OVKnicxzodza2PBqUAFGEDoPD7O0Gpmx1DY9FGyepMrtylP6MGRpqcSqCISZu-4J8VtLIK6zk9GGbdcfYLSoI0eC_Gh_jxGyw3KTKYf4MUCBy1EXImkqO0gFFKlen',
    difficulty: 'Strenuous',
    bestSeason: 'April - May (Rhododendrons) & Oct - Nov (Crystal clear skies)',
    groupSize: '4 - 10 Trekkers',
    itinerary: [
      { day: 1, title: 'Yuksam (Base) to Bakhim & Tsokha', description: 'Trail begins in historic Yuksam, crossing suspension bridges over Rathong river into Tsokha Tibetan hamlet.', altitude: '2,960m', stay: 'Tsokha Mountain Hut' },
      { day: 2, title: 'Tsokha to Dzongri via Phedang', description: 'Steep climb through dense rhododendron forest onto the Dzongri meadow ridge.', altitude: '3,970m', stay: 'Dzongri Alpine Camp' },
      { day: 3, title: 'Dzongri Top Sunrise & Acclimatization', description: 'Early morning hike to Dzongri view point for 180° amphitheatre of 16 Himalayan giants.', altitude: '4,150m', stay: 'Dzongri Alpine Camp' },
      { day: 4, title: 'Dzongri to Thansing', description: 'Descend to Kokchurang river bed and ascend into the wide glacial valley of Thansing.', altitude: '3,930m', stay: 'Thansing Wilderness Tents' },
      { day: 5, title: 'Thansing to Lamuney Base', description: 'Gentle walk towards the holy emerald waters of Samiti Lake.', altitude: '4,160m', stay: 'Lamuney High Camp' },
      { day: 6, title: 'Lamuney to Goecha La View Point 1 & Back to Kokchurang', description: 'Summit push at 3:00 AM under starlight. Golden alpenglow hits Mount Kanchenjunga main wall.', altitude: '4,940m', stay: 'Kokchurang Hut' },
      { day: 7, title: 'Kokchurang to Tsokha', description: 'Descend through moss-covered enchanted forests avoiding the steep Dzongri bypass.', altitude: '2,960m', stay: 'Tsokha Hut' },
      { day: 8, title: 'Tsokha to Yuksam', description: 'Last stretch back to Yuksam village. Celebration dinner with local Tongba.', altitude: '1,780m', stay: 'Yuksam Heritage Lodge' },
      { day: 9, title: 'Yuksam Culture & Dubdi Monastery Walk', description: 'Visit Sikkim’s oldest monastery and the historic coronation throne of Norbugang.', altitude: '1,780m', stay: 'Yuksam Heritage Lodge' },
      { day: 10, title: 'Departure from Yuksam', description: 'Transfer to Bagdogra Airport or NJP railway hub.', altitude: '100m', stay: 'Departure' }
    ],
    inclusions: [
      'KNP National park permits, Inner Line Permits, environmental green fees',
      'Expedition leader certified in wilderness medicine & alpine rescue',
      '4-season expedition tents, sub-zero sleeping bags, insulated foam mats',
      'Yaks / Dzos support team for logistics and baggage',
      'Hot nutritious trail meals cooked fresh by expedition chef'
    ],
    exclusions: [
      'Personal emergency satellite evacuation or helicopter insurance',
      'Porter service for personal bags exceeding 10kg',
      'Airport transfers from Bagdogra'
    ],
    gearChecklist: [
      'Heavy-duty trekking shoes with ankle support',
      'Sub-zero goose down jacket (-15°C rating)',
      'Waterproof Gore-Tex pants and jacket',
      'Trekking poles, balaclava, UV glacier goggles'
    ]
  },
  {
    id: 'darjeeling-tea-heritage',
    title: 'Heritage Tea Estate & Tiger Hill Trail',
    region: 'Darjeeling',
    locationDisplay: 'Darjeeling Hills',
    duration: '2 Night 3 Days',
    durationDays: 3,
    altitudeDisplay: '2,590m Tiger Hill',
    maxAltitudeMeters: 2590,
    altitudeIcon: 'landscape',
    price: 9800,
    originalPrice: 11500,
    description: 'Immerse in the colonial charm and emerald tea slopes of Darjeeling. Sunrise view of Everest and Kanchenjunga from Tiger Hill, artisanal tea-tasting sessions, and heritage mountain train ride.',
    highlights: ['First Flush Tea Tasting', 'Toy Train Heritage', 'Tiger Hill Sunrise'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCes1OPtgCoyHtKESD0YVMthO0PxWRX_sl9086xn5LP20GmiLaOJ9RL7MF0v6JQtGiTd-COCL--K0gGFFwuTKDC6w0-qUEVpeTb6Ny4NpoBaqqCmQmmvcRFb-kTEkxx2vwOHIxunbNOF9FPaMPn28s_B_TD3wduY_J3ZI0o4A_m5Lt8UR0bQ-kPBKcYdzmRQdEzqylsY9WZ9QObnZBET4T2F3yIfJCNnDPNdlVDAoJXPBAYuKrh9Fz',
    difficulty: 'Easy',
    bestSeason: 'Year Round (Spring for flowers, Autumn for mountain clarity)',
    groupSize: '2 - 8 Travelers',
    itinerary: [
      { day: 1, title: 'Arrival in Darjeeling & Makaibari/Glenburn Estate Tour', description: 'Walk through organic tea gardens, interact with tea pickers, cupping session with tea master.', altitude: '1,800m', stay: 'Tea Planter Bungalow' },
      { day: 2, title: 'Dawn at Tiger Hill & Batasia Loop Himalayan Railway', description: 'Early morning sunrise, Ghum Monastery visit, and scenic joy ride on steam locomotive.', altitude: '2,590m', stay: 'Heritage Boutique Lodge' },
      { day: 3, title: 'Mall Road, Himalayan Mountaineering Institute & Departure', description: 'Visit Everest museum and local market before descent to airport.', altitude: '2,040m', stay: 'Departure' }
    ],
    inclusions: [
      'Colonial heritage estate luxury homestay accommodations',
      'Curated private tea factory tour with certified tea sommelier',
      'Private vehicle for sunrise at Tiger Hill and sightseeing',
      'Himalayan toy train joy ride tickets (steam engine)',
      'Breakfast and traditional organic dinners'
    ],
    exclusions: ['Lunch and cafe hops on Mall road', 'Tips and personal shopping'],
    gearChecklist: ['Comfortable walking shoes', 'Warm jacket for Tiger Hill early morning', 'Sun protection hat']
  }
];

export const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'story-annapurna',
    title: 'ANNAPURNA TREK',
    routeKicker: 'Annapurna Base Camp →',
    duration: '04:18',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNQK0so_26MTj52e5wRozgcAwJj71zg93awX8ZlABBse_pbmf-nG0PSUOyky_oVOpmF-lLhqIBWNHtMPYgQjrReya0T_6KpZHBGG284jCz-E7-q-jHcZdNoN9OVKnicxzodza2PBqUAFGEDoPD7O0Gpmx1DY9FGyepMrtylP6MGRpqcSqCISZu-4J8VtLIK6zk9GGbdcfYLSoI0eC_Gh_jxGyw3KTKYf4MUCBy1EXImkqO0gFFKlen',
    videoTitle: 'Journey through the Annapurna Sanctuary: From Bamboo to 4,130m',
    location: 'Nepal Himalayas',
    altitude: '4,130m Sanctuary Base',
    description: 'Shot over 8 crisp autumn days. Experience the dramatic transition from lush bamboo river gorges to the towering vertical rock faces of Machapuchare and Annapurna I at dawn.',
    routeHighlights: ['Jhinu Danda Natural Hot Springs', 'Machapuchare Base Camp Ridge', 'Morning Golden Hour at ABC'],
    elevationProfile: [
      { point: 'Nayapul', elevation: 1070 },
      { point: 'Chhomrong', elevation: 2170 },
      { point: 'Bamboo', elevation: 2310 },
      { point: 'Deurali', elevation: 3200 },
      { point: 'MBC', elevation: 3700 },
      { point: 'ABC', elevation: 4130 }
    ]
  },
  {
    id: 'story-sandakphu-tour',
    title: 'SANDAKPHU TOUR',
    routeKicker: 'Sandakphu Tour →',
    duration: '06:45',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCes1OPtgCoyHtKESD0YVMthO0PxWRX_sl9086xn5LP20GmiLaOJ9RL7MF0v6JQtGiTd-COCL--K0gGFFwuTKDC6w0-qUEVpeTb6Ny4NpoBaqqCmQmmvcRFb-kTEkxx2vwOHIxunbNOF9FPaMPn28s_B_TD3wduY_J3ZI0o4A_m5Lt8UR0bQ-kPBKcYdzmRQdEzqylsY9WZ9QObnZBET4T2F3yIfJCNnDPNdlVDAoJXPBAYuKrh9Fz',
    videoTitle: 'The Singalila Ridge Road: 1950s Land Rovers & Mountain Teahouses',
    location: 'West Bengal & Nepal Border',
    altitude: '3,636m (11,930 ft)',
    description: 'Hop into the legendary vintage 4x4 Series I Land Rovers conquering the cobblestone ridge of Singalila. Watch steam rise from hot tea glasses inside rustic border wooden homestays.',
    routeHighlights: ['Vintage Series Land Rover Trails', 'Kalipokhri Mystic Lake', 'Sleeping Buddha Sunset Cloud Sea'],
    elevationProfile: [
      { point: 'Maneybhanjan', elevation: 1928 },
      { point: 'Chitre', elevation: 2540 },
      { point: 'Tumling', elevation: 2970 },
      { point: 'Gairibas', elevation: 2620 },
      { point: 'Kalipokhri', elevation: 3186 },
      { point: 'Sandakphu', elevation: 3636 }
    ]
  },
  {
    id: 'story-sandakphu-trek',
    title: 'SANDAKPHU TREK',
    routeKicker: 'Singalila Ridge Trek →',
    duration: '05:20',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCECX_PgQDnIYMgT5N5QU4CuyHhLFea5Q7jURhmoNG3p4HGsdzyyQviLwxiYMciIAljINhXme3B-NnAUIe3oABol_A7hb3MBmcVO_UvAHjjJXrK_Stb-hl0CM12GIOReoObGAObnw6zpxu1h47g1yL4nkxph_zB2fBPSLJwxDmI85fzjNBtFedXPHqyru9NFUQeVRNahlHFkCFgdx-rhd_WirrzIrdMqdEkFxbFJnoMMo-yc5j-mTMx',
    videoTitle: 'Borderline Footsteps: Walking Between India & Nepal Along Singalila',
    location: 'Singalila National Park',
    altitude: '3,636m High Ridge',
    description: 'An intimate trekker’s perspective following ancient footpaths alongside international border pillars. Witness Red Panda forest sanctuaries, rhododendron bloom tunnels, and starry skies.',
    routeHighlights: ['Nepal-India Border Boundary Pillars', 'Red Panda Habitat Trails', 'Sunrise View of Everest & Kanchenjunga'],
    elevationProfile: [
      { point: 'Dhotrey', elevation: 2560 },
      { point: 'Tonglu', elevation: 3036 },
      { point: 'Tumling', elevation: 2970 },
      { point: 'Sandakphu', elevation: 3636 },
      { point: 'Sabargram', elevation: 3530 },
      { point: 'Phalut', elevation: 3600 }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Diburcha Aship',
    initial: 'D',
    avatarBg: 'bg-[#c0ecd7]',
    avatarText: 'text-[#002116]',
    rating: 5,
    review: 'Highly recommend Yatri Adventure for trekking in the Himalayas! Their local guides and teams from the region are incredibly knowledgeable, professional, and genuinely care about safety. Booking with a local operator means smaller group sizes and better personal support on tough terrains like Goecha La. If you want an authentic and smooth mountain experience, go with them',
    packageName: 'Goecha-la Trek',
    verified: true,
    date: 'March 2025',
    location: 'Bengaluru, India'
  },
  {
    id: 'rev-2',
    name: 'Karan Raii',
    initial: 'K',
    avatarBg: 'bg-[#dce2f8]',
    avatarText: 'text-[#151b2b]',
    rating: 5,
    review: 'I did the Goecha la treak, West Sikkim with Yatri Adventure and it exceeded all expectation. The logistics were flawless, homestay food was warm and nutritious even at 4,000m, and our guide Tenzing knew every twist and stone of the trail.',
    packageName: 'Goecha-la Trek',
    verified: true,
    date: 'February 2025',
    location: 'Kalimpong'
  },
  {
    id: 'rev-3',
    name: 'Mr. Bubu',
    initial: 'M',
    avatarBg: 'bg-[#ffdbcf]',
    avatarText: 'text-[#390c00]',
    rating: 5,
    review: "Goecha La trek with Yatri Adventure was an experience I'll never forget. From day 1, the team took care of everything - permits, stays, food, and safety. Guides were super supportive, especially on the tough climbs. Views of Kanchenjunga from View Point 1 left me speechless. If you want a well-organized, safe, and memorable Himalayan trek, go with Yatri Adventure. Highly recommended!✨",
    packageName: 'Goecha-la Trek',
    verified: true,
    date: 'April 2025',
    location: 'Mumbai, India'
  },
  {
    id: 'rev-4',
    name: 'Priyanka Sen',
    initial: 'P',
    avatarBg: 'bg-[#e0e3e5]',
    avatarText: 'text-[#191c1e]',
    rating: 5,
    review: 'Sandakphu 4x4 Tour with my parents was a dream come true. We had fears about mountain roads, but Yatri Adventure provided a gentle driver, cozy homestays with hot water bags, and unhurried stops for photography. The Sleeping Buddha at 6 AM was pure magic.',
    packageName: 'Sandakphu Tour',
    verified: true,
    date: 'January 2025',
    location: 'Kolkata, India'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tenzing-sherpa',
    name: 'Tenzing N. Sherpa',
    role: 'Chief High-Altitude Expedition Leader',
    experienceYears: 14,
    hometown: 'Darjeeling & Solukhumbu',
    languages: ['Nepali', 'Sherpa', 'English', 'Hindi', 'Tibetan'],
    certifications: ['Advanced Mountaineering (HMI Darjeeling)', 'Wilderness First Responder (WFR)', 'Search & Rescue Level 2'],
    bio: 'Born in the high hills of Darjeeling with deep ancestral roots in Khumbu, Tenzing has led over 90 high-altitude Himalayan ascents across Sikkim, Nepal, and Ladakh. His quiet calmness and obsession with altitude safety has made him a legend among Yatri explorers.',
    favoriteTrek: 'Goecha La & Mera Peak',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pemba-bhutia',
    name: 'Pemba Tshering Bhutia',
    role: 'Singalila Wildlife & Cultural Lead',
    experienceYears: 11,
    hometown: 'Manebhanjan, West Bengal',
    languages: ['Nepali', 'Bhutia', 'Bengali', 'Hindi', 'English'],
    certifications: ['Certified Wildlife Tracker', 'Singalila National Park Naturalist', 'Leave No Trace Master Educator'],
    bio: 'Pemba has spent his lifetime on the Singalila Ridge. He knows every hidden teahouse between Tumling and Phalut, and can identify bird calls and red panda footprints with uncanny precision.',
    favoriteTrek: 'Singalila Traverse to Phalut',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dawa-lepcha',
    name: 'Dawa Lepcha',
    role: 'Alpine Canyoning & River Safety Specialist',
    experienceYears: 8,
    hometown: 'Kalimpong Hills',
    languages: ['Lepcha', 'Nepali', 'English', 'Hindi'],
    certifications: ['Rescue 3 International Swiftwater', 'CE Canyoning Guide Level 3', 'First Aid Certified'],
    bio: 'Specializing in vertical rope maneuvers, waterfall rappelling, and fast mountain rivers, Dawa leads Yatri Adventure’s canyoning operations in the lush gorges of Darjeeling and North Bengal.',
    favoriteTrek: 'Darjeeling Waterfall Canyons',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mingma-yangzom',
    name: 'Mingma Yangzom',
    role: 'Community Homestay & Eco-Tourism Coordinator',
    experienceYears: 9,
    hometown: 'Yuksam, West Sikkim',
    languages: ['Nepali', 'Bhutia', 'English', 'Hindi'],
    certifications: ['Sustainable Tourism Council Partner', 'Culinary Heritage Advocate'],
    bio: 'Mingma bridges travelers with authentic mountain village families. She ensures that 100% of homestay payments go directly to local matriarchs and smallholders, fostering dignified, regenerative tourism.',
    favoriteTrek: 'Yuksam - Dzongri Heritage Trail',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  }
];
