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
      { day: 4, title: 'Sunrise Excursion to Mardi Himal Base Camp', description: 'Pre-dawn climb to Mardi Himal Base Camp (4,500m). Eye-level views of Machapuchare face.', altitude: '4,500m', stay: 'High Camp Lodge' },
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
  }
];
