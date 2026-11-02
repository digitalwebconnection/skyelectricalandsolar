export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
  tags: string[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
      keyPoints?: string[];
    }[];
    conclusion: string;
  };
}

export const BLOG_CATEGORIES = [
  "All Articles",
  "Rebates & Incentives",
  "Battery Storage",
  "Solar Technology",
  "Grid & Compliance",
  "Commercial Solar",
  "EV & Future Tech",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "australian-solar-battery-rebates-2026",
    slug: "australian-solar-battery-rebates-2026",
    title: "2026 Australian Solar & Battery Rebates: State-by-State Guide (WA, NSW & QLD)",
    excerpt:
      "Federal STC discount phase-downs, WA Peak Demand incentives, NSW Peak Demand Reduction Scheme (PDRS), and QLD battery grants: how Australian homeowners can maximize upfront discounts.",
    category: "Rebates & Incentives",
    date: "October 28, 2026",
    readTime: "6 min read",
    author: {
      name: "Cameron Hughes",
      role: "CEC Accredited Master Electrician",
      avatar: "/assets/banner/banner-electrical-technician.jpg",
    },
    image: "/assets/banner/banner-13kw-battery.jpg",
    featured: true,
    tags: ["STC Rebates", "PDRS NSW", "WA Solar", "Battery Subsidies"],
    content: {
      introduction:
        "Navigating Australia's clean energy incentives can save homeowners between $2,200 and $6,000 on high-efficiency solar and battery installations. However, government programs change annually. Here is what is active and fully claimable across Western Australia, New South Wales, and Queensland in 2026.",
      sections: [
        {
          heading: "1. Federal Small-Scale Renewable Energy Scheme (STCs)",
          paragraphs: [
            "The Federal Government STC program continues to act as an upfront point-of-sale discount deducted directly from your quote. Because the scheme phases down each year until its 2030 conclusion, locking in your system earlier in the calendar year secures higher certificate multipliers.",
            "For a typical 10kW residential array in Perth or Brisbane, STCs reduce total installation costs by approximately $2,800 to $3,400 depending on live certificate market pricing.",
          ],
          keyPoints: [
            "Deducted upfront directly on your Sky Electrical & Solar invoice",
            "Available to owner-occupiers, landlords, and small commercial sites",
            "Requires Clean Energy Council approved panels and accredited installers",
          ],
        },
        {
          heading: "2. New South Wales Peak Demand Reduction Scheme (PDRS)",
          paragraphs: [
            "NSW homeowners can now access substantial peak demand incentives when installing approved battery storage systems. Under the PDRS, batteries between 2kWh and 28kWh that connect to a Virtual Power Plant (VPP) qualify for up to $1,600 to $2,400 in equipment credits.",
            "This initiative is designed to relieve evening pressure on the Ausgrid and Endeavour Energy networks while providing homes with continuous blackout security.",
          ],
        },
        {
          heading: "3. Western Australia Synergy & Western Power Smart Tariffs",
          paragraphs: [
            "While WA does not offer a standalone state battery grant, Synergy's Midday Saver tariffs and Distributed Energy Buyback Scheme (DEBS) reward households with storage. Storing free midday solar power and discharging it during peak 3:00 PM – 9:00 PM evening hours yields over 40c/kWh in avoided utility charges.",
          ],
        },
      ],
      conclusion:
        "Every quote from Sky Electrical & Solar automatically includes all eligible federal and state incentives subtracted upfront. Contact our engineering team for an exact itemized rebate calculation tailored to your address.",
    },
  },
  {
    id: "tesla-powerwall-vs-sungrow-battery",
    slug: "tesla-powerwall-vs-sungrow-battery",
    title: "Tesla Powerwall 3 vs Sungrow SBR: Which Battery Suits Australian Climates?",
    excerpt:
      "Comparing high-temperature thermal resilience under 45°C summer heatwaves, continuous kW backup output, black-start capabilities, and real-world payback periods.",
    category: "Battery Storage",
    date: "October 22, 2026",
    readTime: "5 min read",
    author: {
      name: "Liam Henderson",
      role: "Senior Clean Energy Systems Engineer",
      avatar: "/assets/banner/banner-electrical-technician.jpg",
    },
    image: "/assets/reviews/battery-storage-garage.jpg",
    tags: ["Tesla Powerwall", "Sungrow", "Home Storage", "Blackout Backup"],
    content: {
      introduction:
        "Australian summer heatwaves demand rugged battery chemistry. With Perth, Sydney, and Brisbane experiencing frequent 40°C+ ambient days, choosing an energy storage system with robust thermal dissipation is crucial to avoid inverter derating and efficiency loss.",
      sections: [
        {
          heading: "Thermal Management & Operating Temp",
          paragraphs: [
            "The Tesla Powerwall 3 utilizes internal liquid cooling, maintaining optimum cell temperature even when mounted on external garage walls under direct summer heat. Sungrow SBR utilizes advanced natural convection cooling with modular stackable LiFePO4 (Lithium Iron Phosphate) prismatic cells.",
            "LiFePO4 chemistry boasts superior chemical stability, eliminating thermal runaway risks in Australian conditions.",
          ],
          keyPoints: [
            "Powerwall 3: 11.5kW continuous backup power with integrated solar inverter",
            "Sungrow SBR: Modular capacity expandable from 9.6kWh to 25.6kWh",
            "Both carry comprehensive 10-year manufacturer replacement warranties",
          ],
        },
      ],
      conclusion:
        "For households seeking an all-in-one unified inverter and battery unit, Powerwall 3 excels. For modular scalability and DC-coupled efficiency, Sungrow SBR offers outstanding value.",
    },
  },
  {
    id: "why-10kw-to-13kw-solar-is-the-new-standard",
    slug: "why-10kw-to-13kw-solar-is-the-new-standard",
    title: "Is 6.6kW Still Enough in 2026? Why 10kW–13.2kW Solar Is The New Normal",
    excerpt:
      "With EV charging, induction cooktops, and heat-pump water systems rising, oversized panel arrays with smart inverter clipping deliver double the financial return.",
    category: "Solar Technology",
    date: "October 15, 2026",
    readTime: "4 min read",
    author: {
      name: "Cameron Hughes",
      role: "CEC Accredited Master Electrician",
      avatar: "/assets/banner/banner-electrical-technician.jpg",
    },
    image: "/assets/reviews/residential-aerial-array.jpg",
    tags: ["13kW Solar", "System Sizing", "ROI", "Electrification"],
    content: {
      introduction:
        "For over a decade, the 6.6kW solar array with a 5kW inverter was Australia's default setup. But as households electrify heating, cooking, and transport, 6.6kW systems frequently fall short of covering daytime household loads during winter and overcast days.",
      sections: [
        {
          heading: "Oversizing for Low-Light Winter Generation",
          paragraphs: [
            "A 13.2kW solar array paired with an 8kW or 10kW inverter generates significantly more usable energy during morning, evening, and cloudy conditions. The Clean Energy Council allows up to 133% DC panel oversizing relative to inverter capacity.",
            "This ensures your system operates at peak capacity for 6 to 8 hours daily rather than just 2 hours around midday.",
          ],
        },
      ],
      conclusion:
        "The marginal cost of upgrading from 6.6kW to 10kW or 13.2kW during initial installation is surprisingly modest due to shared balance-of-system and labor costs, delivering faster payback periods.",
    },
  },
  {
    id: "smart-inverter-rules-western-power-ausgrid",
    slug: "smart-inverter-rules-western-power-ausgrid",
    title: "Smart Inverter Rules: Western Power & Ausgrid Dynamic Export Limits",
    excerpt:
      "How Flexible Exports and CSIP-Aus protocols allow modern solar systems to export up to 10kW during clear grid hours while maintaining network stability.",
    category: "Grid & Compliance",
    date: "October 08, 2026",
    readTime: "5 min read",
    author: {
      name: "Mark Vance",
      role: "A-Grade Electrical Compliance Officer",
      avatar: "/assets/banner/banner-electrical-technician.jpg",
    },
    image: "/assets/reviews/electrician-wiring-switchboard.jpg",
    tags: ["Dynamic Exports", "Western Power", "Ausgrid", "Grid Compliance"],
    content: {
      introduction:
        "Australian distribution networks are modernizing rapidly. Fixed 1.5kW or 5kW export caps are being replaced by dynamic flexible exports, enabling approved smart inverters to push up to 10kW into the grid whenever local network capacity allows.",
      sections: [
        {
          heading: "How CSIP-Aus Smart Inverters Operate",
          paragraphs: [
            "Inverters equipped with CSIP-Aus communication communicate continuously with network operators like Western Power, Ausgrid, and Energex. Instead of permanently throttling your export capacity, network operators adjust limits dynamically in real time.",
            "Our team configures dynamic export controllers during every installation, ensuring you capture maximum feed-in credits.",
          ],
        },
      ],
      conclusion:
        "Working with a CEC-accredited installer experienced in local DNSP portal submissions guarantees fast grid connection approval without bureaucratic delays.",
    },
  },
  {
    id: "commercial-rooftop-solar-warehouses",
    slug: "commercial-rooftop-solar-warehouses",
    title: "Commercial Rooftop Solar for Australian Warehouses & Strata Facilities",
    excerpt:
      "How 30kW to 100kW commercial PV systems reduce demand tariffs, yield instant asset write-off tax benefits, and protect companies from wholesale price volatility.",
    category: "Commercial Solar",
    date: "September 29, 2026",
    readTime: "7 min read",
    author: {
      name: "Liam Henderson",
      role: "Senior Clean Energy Systems Engineer",
      avatar: "/assets/banner/banner-electrical-technician.jpg",
    },
    image: "/assets/banner/banner-commercial-solar.jpg",
    tags: ["Commercial Solar", "Warehouses", "Demand Charges", "Tax Benefits"],
    content: {
      introduction:
        "Electricity costs represent one of the fastest-growing operating overheads for Australian manufacturing facilities, cold storage, and logistics hubs. Commercial solar systems ranging from 30kW to 100kW+ offer internal rates of return (IRR) exceeding 25% to 35% per annum.",
      sections: [
        {
          heading: "Slashing Peak kVA Demand Charges",
          paragraphs: [
            "Unlike residential customers who pay flat consumption rates, commercial operators face steep monthly demand charges based on their single highest 15-minute power spike. Solar coupled with peak-shaving battery storage eliminates these costly spikes.",
          ],
        },
      ],
      conclusion:
        "Sky Electrical & Solar provides turnkey commercial feasibility audits, structural engineering sign-offs, and zero-capital commercial PPA finance options.",
    },
  },
  {
    id: "ev-charging-solar-surplus",
    slug: "ev-charging-solar-surplus",
    title: "EV Charging with Solar: Harnessing 100% Free Surplus Rooftop Energy",
    excerpt:
      "How solar-aware Level 2 EV chargers like Zappi and Tesla Wall Connector divert midday solar generation straight into your vehicle battery instead of the grid.",
    category: "EV & Future Tech",
    date: "September 18, 2026",
    readTime: "4 min read",
    author: {
      name: "Cameron Hughes",
      role: "CEC Accredited Master Electrician",
      avatar: "/assets/banner/banner-electrical-technician.jpg",
    },
    image: "/assets/posters/poster-ev.jpg",
    tags: ["EV Charging", "Zappi", "Solar EV", "Clean Transport"],
    content: {
      introduction:
        "Exporting excess solar energy to the grid often earns low feed-in tariffs (typically 3c to 7c/kWh). However, diverting that same energy into your electric vehicle displaces expensive grid electricity (30c to 45c/kWh) or petrol ($2.00+/litre), saving thousands annually.",
      sections: [
        {
          heading: "Smart CT Clamps & Solar Matching",
          paragraphs: [
            "Smart EV chargers use external current transformer (CT) clamps on your main switchboard to detect precisely when solar exports begin. The charger automatically ramps charging speed up or down to match your real-time solar surplus.",
          ],
        },
      ],
      conclusion:
        "Our A-Grade master electricians supply and install leading smart EV chargers across Perth, Sydney, and Brisbane with full switchboard safety upgrades.",
    },
  },
];
